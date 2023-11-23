import React, { Component } from 'react';
import uuidv1 from 'uuidv1';
import {Editor, EditorState, RichUtils, getDefaultKeyBinding} from 'draft-js';
import {stateToHTML} from 'draft-js-export-html';

import BlockStyleControls from './RichText/BlockStyleControls';
import InlineStyleControls from './RichText/InlineStyleControls';

import './RichText.css';

export class NewStory extends Component {
  constructor(props) {
      super(props);
      this.state = {
        editorState: EditorState.createEmpty(),
        title: '',
        image: '',
        body: '',
        done: 'no'
      };

      this.focus = () => this.refs.editor.focus();
      this.onChange = this.onChange.bind(this);
      this.handleKeyCommand = this._handleKeyCommand.bind(this);
      this.mapKeyToEditorCommand = this._mapKeyToEditorCommand.bind(this);
      this.toggleBlockType = this._toggleBlockType.bind(this);
      this.toggleInlineStyle = this._toggleInlineStyle.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    onChange(editorState) {
      this.setState({editorState});
      const contentState = this.state.editorState.getCurrentContent();
      const html = stateToHTML(contentState);
      this.state.title && this.state.body ? this.setState({done: 'done'}) : console.log('ok lets go');
      this.setState({body: html});
    }

    _handleKeyCommand(command, editorState) {
      const newState = RichUtils.handleKeyCommand(editorState, command);
      if (newState) {
        this.onChange(newState);
        return true;
      }
      return false;
    }

    _mapKeyToEditorCommand(e) {
      if (e.keyCode === 9 /* TAB */) {
        const newEditorState = RichUtils.onTab(
          e,
          this.state.editorState,
          4, /* maxDepth */
        );
        if (newEditorState !== this.state.editorState) {
          this.onChange(newEditorState);
        }
        return;
      }
      return getDefaultKeyBinding(e);
    }

    _toggleBlockType(blockType) {
      this.onChange(
        RichUtils.toggleBlockType(
          this.state.editorState,
          blockType
        )
      );
    }

    _toggleInlineStyle(inlineStyle) {
      this.onChange(
        RichUtils.toggleInlineStyle(
          this.state.editorState,
          inlineStyle
        )
      );
    }

    handleSubmit() {
      const { title,image, body } = this.state;
      if(title && body) {
        let newStory = {id: uuidv1(), title, image, body, bookmark: false};
        this.props.handleSubmission(newStory);
        this.setState({editorState: EditorState.createEmpty(), title: '', image: '', body: '', done: 'submitted'});
      }
    }

    render() {
      const { editorState } = this.state;
      let className = 'RichEditor-editor';
      var contentState = editorState.getCurrentContent();
      if (!contentState.hasText()) {
        if (contentState.getBlockMap().first().getType() !== 'unstyled') {
          className += ' RichEditor-hidePlaceholder';
        }
      }

      const { title, done } = this.state;

      return (
        <div className="richtext-editor">
          <input type="text" className="input-title" value={title} onChange={(e) => this.setState({title: e.target.value})} placeholder="Tiêu đề" />
          <BlockStyleControls
            editorState={editorState}
            onToggle={this.toggleBlockType}
          />
          <InlineStyleControls
            editorState={editorState}
            onToggle={this.toggleInlineStyle}
          />
          <div className={className} onClick={this.focus}>
            <Editor
              blockStyleFn={getBlockStyle}
              editorState={editorState}
              handleKeyCommand={this.handleKeyCommand}
              keyBindingFn={this.mapKeyToEditorCommand}
              onChange={this.onChange}
              placeholder="Kể câu chuyện của bạn..."
              ref="editor"
              spellCheck={true}
            />
          </div>
          {done ==='done' ? <button onClick={this.handleSubmit} className="btn btn-submit">Gửi</button> : (done==='submitted' ? <span className="msg-success">Câu chuyện của bạn đã được gửi.</span> : <span className="msg-error">Bạn chưa hoàn thành câu chuyện.</span>)}
        </div>
      );

      function getBlockStyle(block) {
        switch (block.getType()) {
          case 'blockquote': return 'RichEditor-blockquote';
          default: return null;
        }
      }
    }
}

export default NewStory;
