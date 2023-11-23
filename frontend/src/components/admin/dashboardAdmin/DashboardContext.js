export const dashboardState = {
  totalData: [],
  totalOrders: [],
  totalMoney: [],
  uploadSliderBtn: true,
  imageUpload: false,
  sliderImages: [],
};

export const dashboardReducer = (state, action) => {
  switch (action.type) {
    case "totalData":
      return {
        ...state,
        totalData: action.payload,
      };
    case "totalOrders":
      return {
        ...state,
        totalOrders: action.payload,
      };
    case "totalMoney":
      return {
        ...state,
        totalMoney: action.payload,
      };
    case "uploadSliderBtn":
      return {
        ...state,
        uploadSliderBtn: action.payload,
      };
    case "imageUpload":
      return {
        ...state,
        imageUpload: action.payload,
      };
    case "sliderImages":
      return {
        ...state,
        sliderImages: action.payload,
      };
    default:
      return state;
  }
};
