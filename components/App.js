import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import TabNavigator from './Navigation/TabNavigator'

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <TabNavigator />
      </Provider>
    );
  }
}
const defaultState = {
  weather: {
    id: '1',
    date: 'Thứ 2',
    icon: 'Rain.png',
    temperature: '35°'
  },
  air: {
    id: "1",
    name: "Hàng Đậu",
    data: 30,
    condition: "Trung Bình",
    description: "Ở mức chấp nhận được. Nhóm nhạy cảm nên hạn chế thời gian ra ngoài",
    near: "CA Phường Hàng Mã,Q.Hoàn Kiếm",
    temp: "18°C",
    humid: "21%"
  },
  water: {
    id: "1",
    name: "Hàng Đậu",
    data: 30,
    condition: "Tốt",
    description: "Chất lượng không khí tốt, phù hợp để ra ngoài , và các hoạt động",
    near: "CA Phường Hàng Mã,Q.Hoàn Kiếm"
  },
  news: {
    id: '1',
    title: 'Khảo sát, ứng dụng thiết bị quan trắc nhanh sử dụng công ... '
  },
  filterDisplay: 'FIFTHTEEN',
  filterDisplayAir: 'AQI'
};
const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'WEATHER':
      return { ...state, weather: action.weather };
    case 'AIR':
      return { ...state, air: action.air };
    case 'WATER':
      return { ...state, water: action.water };
    case 'NEWS':
      return { ...state, news: action.news };
    case 'FILTER_FIFTHTEEN':
      return { ...state, filterDisplay: 'FIFTHTEEN' };
    case 'FILTER_THIRTY':
      return { ...state, filterDisplay: 'THIRTY' };
    case 'FILTER_CUSTOM':
      return { ...state, filterDisplay: 'CUSTOM' };
    case 'FILTER_AQI':
      return { ...state, filterDisplayAir: 'AQI' };
    case 'FILTER_PM25':
      return { ...state, filterDisplayAir: 'PM25' };
    case 'FILTER_CO':
      return { ...state, filterDisplayAir: 'CO' };
    case 'FILTER_OZONE':
      return { ...state, filterDisplayAir: 'OZONE' };
    default:
      break;
  }

  return state;
}
const store = createStore(reducer);
