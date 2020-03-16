import { Dimensions } from 'react-native';

const params = {
  blockSize: 30,
  borderSize: 5,
  fontSize: 15,
  headerRatio: 0.15,
  difficultLevel: 0.1,
  levelOptions: [
    {
      levelName: 'Fácil',
      levelValue: 0.1,
      levelBgColor: '#49b65d',
    },
    {
      levelName: 'Normal',
      levelValue: 0.2,
      levelBgColor: '#2765F7',
    },
    {
      levelName: 'Difícil',
      levelValue: 0.3,
      levelBgColor: '#F26337',
    },
  ],
  getColumnsAmount() {
    const {width} = Dimensions.get('window');
    return Math.floor(width / this.blockSize);
  },
  getRowsAmount() {
    const totalHeight = Dimensions.get('window').height;
    const boardHeight = totalHeight * (1 - this.headerRatio);
    return Math.floor(boardHeight / this.blockSize);
  },
};

export default params;
