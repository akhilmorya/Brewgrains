import React, { Component } from 'react';
import {
  View, Text, FlatList, Image, TouchableOpacity, TextInput, Dimensions
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Icons from 'react-native-vector-icons/Ionicons';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import { connect } from 'react-redux';
import I18n from '../../../../i18n/index';
import NavigationService from '../../../../services/navigationService';
import AlertModal from '../../../customComponents/AlertModal';
import * as CONST from '../../../../utils/constants';
import * as brandActions from '../../../../actions/brandActions';
import * as productActions from '../../../../actions/productActions';
import styles from './CategoriesComponentStyle';

const { height, width } = Dimensions.get('window');

class CategoriesComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categoriesBrandsText: '',
      categoriesList: [],
      searchedCategories: []
    };
  }

  componentDidMount() {
    const { filters } = this.props;
    this.setState({ searchedCategories: this.props.allCategories, categoriesList: this.props.allCategories });
  }

  searchFilterFunction(searchedBrand) {
    let newData = this.state.categoriesList.filter((item) => {
      const itemData = item.name.toLowerCase();
      const textData = searchedBrand.toLowerCase();
      return itemData.toString().indexOf(textData) > -1;
    });
    this.setState({ searchedCategories: newData });
  }

  selectBrands(item) {
    const localCategories = this.state.searchedCategories;
    const selectedIndex = localCategories.findIndex((brands) => brands.id === item.id);
    localCategories[selectedIndex].selected = !item.selected;
    this.setState({ searchedCategories: localCategories });
  }

  onPressCrossIcon() {
    this.props.navigation.goBack();
    let filterObject = this.props.filters;
    filterObject['categories'] = this.state.searchedCategories;
    this.props.setAllFilters(filterObject);
    this.props.navigation.goBack();
  }

  onPressCrossSearch() {
    this.setState({ categoriesBrandsText: '' }, () => {
      this.searchFilterFunction(this.state.categoriesBrandsText);
    });
  }

  onChangeText(searchText) {
    this.setState({ categoriesBrandsText: searchText }, () => {
      this.searchFilterFunction(searchText);
    });
  }

  renderCell({ item }) {
    const { name } = item;
    return (
      <TouchableOpacity onPress={() => this.selectBrands(item)} style={styles.cell}>
        <Text style={[styles.brand, { color: item.selected ? CONST.PRIMARY_COLOR : CONST.BORDER_COLOR_GREY_LIGHT }]}>{name}</Text>
      </TouchableOpacity>
    );
  }

  renderCategoriesHeader() {
    return (
      <View style={styles.brandsHeader}>
        <Text style={styles.brandsText}>Categories</Text>
        <TouchableOpacity onPress={() => this.onPressCrossIcon()} style={styles.crossIcon}>
          <Icons name="ios-close" size={40} color={CONST.BORDER_COLOR_GREY_LIGHT} />
        </TouchableOpacity>
      </View>
    );
  }

  renderSearchContainer() {
    return (
      <View style={styles.searchContainer}>
        <TextInput
          underlineColorAndroid="transparent"
          returnKeyType="next"
          placeholder="Search product"
          value={this.state.categoriesBrandsText}
          autoCapitalize="none"
          onChangeText={(searchText) => this.onChangeText(searchText)}
          keyboardType="email-address"
          style={styles.searchInput}
        />
        <TouchableOpacity style={styles.searchIcon}>
          <Image source={CONST.SEARCH_ICON} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.onPressCrossSearch()} style={styles.filterIcon}>
          <Image source={CONST.SMALL_CROSS} />
        </TouchableOpacity>
      </View>
    );
  }

  renderCategoriesList() {
    return (
      <View style={styles.listContainer}>
        <FlatList
          keyExtractor={(item, index) => index.toString()}
          data={this.state.searchedCategories}
          renderItem={(item) => this.renderCell(item)}
          extraData={this.state}
        />
        <Image style={styles.loadMore} source={CONST.LOAD_MORE_ICON} />
      </View>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        {this.renderCategoriesHeader()}
        {this.renderSearchContainer()}
        {this.renderCategoriesList()}
      </View>

    );
  }
}


const mapStateToProps = (state) => ({
  filters: state.BrandReducer.filters,
  allBrands: state.BrandReducer.allBrands,
  allCategories: state.BrandReducer.allCategories,
});

const mapDispatchToProps = (dispatch) => ({
  setAllFilters: () => {
    return dispatch(brandActions.setAllFilters());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CategoriesComponent);