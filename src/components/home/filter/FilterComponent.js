import React, { Component } from 'react';
import {
  View, Text, Image, TouchableOpacity, Dimensions, ScrollView
} from 'react-native';
import Icons from 'react-native-vector-icons/Ionicons';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import { connect } from 'react-redux';
import NavigationService from '../../../services/navigationService';
import * as CONST from '../../../utils/constants';
import * as brandActions from '../../../actions/brandActions';
import * as productActions from '../../../actions/productActions';
import showToast from '../../../utils/showToast';
import styles from './FilterComponentStyle';

const { height, width } = Dimensions.get('window');

class FilterComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      multiSliderValue: [],
      isNameFilterClicked: false,
      isRatedFilterClicked: false,
      brands: [],
      categories: [],
      isFilterCleared: false,
    };
  }

  componentDidMount() {
    this.props.navigation.addListener('willFocus', () => {
      const { filters } = this.props;
      this.setState({
        brands: this.props.allBrands,
        categories: this.props.allCategories,
        multiSliderValue: filters.priceRange,
        isNameFilterClicked: filters.isNameFilterClicked,
        isRatedFilterClicked: filters.isRatedFilterClicked
      });
    });
  }

  multiSliderValuesChange = (values) => {
    this.setState({
      multiSliderValue: values,
    }, () => {
      const { filters } = this.props;
      filters['priceRange'] = this.state.multiSliderValue;
    });
  };

  onPressBackButton() {
    this.props.navigation.goBack();
  }

  onPressNameFilter() {
    this.setState({ isNameFilterClicked: !this.state.isNameFilterClicked }, () => {
      const { filters } = this.props;
      filters['isNameFilterClicked'] = this.state.isNameFilterClicked;
      this.props.setAllFilters(filters);
    });
  }

  onPressRated() {
    this.setState({ isRatedFilterClicked: !this.state.isRatedFilterClicked }, () => {
      const { filters } = this.props;
      filters['isRatedFilterClicked'] = this.state.isRatedFilterClicked;
    });
  }

  onPressBrands() {
    NavigationService.navigate('BrandsScreen');
  }

  onPressCategories() {
    NavigationService.navigate('CategoriesScreen');
  }

  getIds(dataArray) {
    const ArrayIds = [];
    for (let i = 0; i < dataArray.length; i++) {
      if (dataArray[i].selected) {
        ArrayIds.push(dataArray[i].id);
      }
    }
    return ArrayIds;
  }

  getAllProductsSuccess(filterObject) {
    showToast('Filter applied successfully!');
    this.props.setAllFilters(filterObject);
    this.props.navigation.goBack();
  }

  onPressApplyFilter() {
    const filterObject = this.props.filters;
    filterObject['priceRange'] = this.state.multiSliderValue;
    filterObject['isNameFilterClicked'] = this.state.isNameFilterClicked;
    filterObject['isRatedFilterClicked'] = this.state.isRatedFilterClicked;
    let dataObject = {};
    dataObject['brand'] = this.getIds(this.props.allBrands);
    dataObject['category'] = this.getIds(this.props.allCategories);
    dataObject['price'] = this.state.multiSliderValue;
    if (this.state.isNameFilterClicked) {
      dataObject['sortByName'] = 'ASC';
    } else {
      dataObject['sortByName'] = 'DESC';
    }
    if (this.state.isFilterCleared) {
      this.props.saveFilters(null);
      dataObject = null;
      this.props.resetAllProducts();
      this.props.navigation.state.params.resetPage();
    } else {
      this.props.saveFilters(dataObject);
    }
    this.props.getAllProducts(1, dataObject, () => this.getAllProductsSuccess(filterObject));
  }

  onRemoveBrands(item) {
    const { filters } = this.props;
    const localBrands = this.props.allBrands;
    const selectedIndex = localBrands.findIndex((brands) => brands.id === item.id);
    localBrands[selectedIndex].selected = false;
    filters['brands'] = localBrands;
    this.setState({ brands: localBrands });
  }

  onRemoveCategories(item) {
    const { filters } = this.props;
    const localCategories = filters.categories;
    const selectedIndex = localCategories.findIndex((brands) => brands.id === item.id);
    localCategories[selectedIndex].selected = false;
    filters['categories'] = localCategories;
    this.setState({ categories: localCategories });
  }

  onPressClearAll() {
    this.setState({
      isFilterCleared: true,
      brands: [],
      categories: [],
      isNameFilterClicked: false,
      isRatedFilterClicked: false,
      multiSliderValue: [10, 500],
    }, () => {
      this.resetFilters();
      this.props.saveFilters(null);
    });
  }

  resetBrandsAndCategories(localArray) {
    const { filters } = this.props;
    const localBrands = filters.brands;
    const localCategories = filters.categories;
    for (let i = 0; i < localBrands.length; i++) {
      localBrands[i].selected = false;
    }
    for (let i = 0; i < localCategories.length; i++) {
      localCategories[i].selected = false;
    }
    filters['brands'] = localBrands;
    filters['categories'] = localCategories;
  }

  resetFilters() {
    const { filters } = this.props;
    this.resetBrandsAndCategories();
    filters['priceRange'] = this.state.multiSliderValue;
    filters['isNameFilterClicked'] = false;
    filters['isRatedFilterClicked'] = false;
  }

  renderFilterHeader() {
    return (
      <View style={styles.headerContainer}>
        <TouchableOpacity activeOpacity={1} style={styles.filterButton}>
          <Text style={styles.filterText}>Filters</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.onPressClearAll()} style={styles.clearButton}>
          <Text style={styles.clearText}>Clear All</Text>
        </TouchableOpacity>
      </View>
    );
  }

  renderBrandsView() {
    const { filters } = this.props;
    return (
      <View style={styles.brands}>
        <View style={styles.brandsContainer}>
          <Text style={styles.brandsText}>Brands</Text>
          <TouchableOpacity onPress={() => this.onPressBrands()} style={styles.arrowButton}>
            <Icons name="ios-arrow-forward" size={35} color={CONST.BORDER_COLOR_GREY_LIGHT} />
          </TouchableOpacity>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.brandsList}>
          {
            this.state.brands.length > 0 && this.state.brands.map((item, index) => {
              if (item.selected) {
                return (
                  <View style={styles.brandView}>
                    <Text style={styles.brandText}>{item.name}</Text>
                    <TouchableOpacity onPress={() => this.onRemoveBrands(item)} style={styles.crossIcon}>
                      <Icons name="ios-close" size={35} color={CONST.BORDER_COLOR_GREY_LIGHT} />
                    </TouchableOpacity>
                  </View>
                );
              } else {
                return (
                  <View />
                );
              }
            })
          }
        </ScrollView>
      </View>
    );
  }

  renderCategoriesView() {
    return (
      <View style={styles.categories}>
        <View style={styles.categoriesContainer}>
          <Text style={styles.brandsText}>Categories</Text>
          <TouchableOpacity onPress={() => this.onPressCategories()} style={styles.arrowButton}>
            <Icons name="ios-arrow-forward" size={35} color={CONST.BORDER_COLOR_GREY_LIGHT} />
          </TouchableOpacity>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.brandsList}>
          {
              this.state.categories.length > 0 && this.state.categories.map((item, index) => {
                if (item.selected) {
                  return (
                    <View style={styles.brandView}>
                      <Text style={styles.brandText}>{item.name}</Text>
                      <TouchableOpacity onPress={() => this.onRemoveCategories(item)} style={styles.crossIcon}>
                        <Icons name="ios-close" size={35} color={CONST.BORDER_COLOR_GREY_LIGHT} />
                      </TouchableOpacity>
                    </View>
                  );
                } else {
                  return (
                    <View />
                  );
                }
              })
            }
        </ScrollView>
      </View>
    );
  }

  renderPriceView() {
    return (
      <View style={styles.price}>
        <View style={styles.priceContainer}>
          <Text style={styles.priceRangeText}>Price Range</Text>
          <Text style={styles.priceText}>{`$ ${this.state.multiSliderValue[0]} - $ ${this.state.multiSliderValue[1]}`}</Text>
          <Text style={styles.productsText}>120 Products found</Text>
        </View>
        <View style={styles.slider}>
          <MultiSlider
            values={[
              this.state.multiSliderValue[0],
              this.state.multiSliderValue[1],
            ]}
            sliderLength={width - 30}
            onValuesChange={this.multiSliderValuesChange}
            min={100}
            max={800}
            step={1}
            allowOverlap
            snapped
            trackStyle={styles.track}
            selectedStyle={styles.selectedTrack}
            customMarker={(e) => {
              return (
                <View style={styles.sliderMarker} />
              );
            }}
          />
        </View>
      </View>
    );
  }

  renderSortByView() {
    return (
      <View style={styles.sortBy}>
        <Text style={styles.brandsText}>Sort By</Text>
        <View style={styles.sortByContainer}>
          <View style={styles.sortButtonContainer}>
            <TouchableOpacity onPress={() => this.onPressNameFilter()} style={[styles.nameButton, { borderWidth: 1, borderColor: this.state.isNameFilterClicked ? CONST.PRIMARY_COLOR : 'transparent' }]}>
              <Image style={styles.cartsIcon} source={CONST.NAME_SORT} />
              <Text style={styles.nameText}>Name (A-Z)</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.onPressRated()} style={[styles.rateButton, { borderWidth: 1, borderColor: this.state.isRatedFilterClicked ? CONST.PRIMARY_COLOR : 'transparent' }]}>
              <Image style={styles.cartsIcon} source={CONST.HIGHLY_RATED} />
              <Text style={styles.nameText}>Highly Rated</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }

  renderBottomView() {
    return (
      <View style={styles.bottomContainer}>
        <TouchableOpacity onPress={() => this.onPressApplyFilter()} style={styles.filterButtonBottom}>
          <Text style={styles.filterTextBottom}>APPLY FILTER</Text>
          <Icons name="ios-arrow-forward" size={25} color={CONST.PRIMARY_COLOR} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.onPressBackButton()} style={styles.backButton}>
          <Text style={styles.backText}>BACK</Text>
        </TouchableOpacity>
      </View>
    );
  }

  render() {
    return (
      <ScrollView>
        {this.renderFilterHeader()}
        {this.renderBrandsView()}
        <View style={styles.horizontalLine} />
        {this.renderCategoriesView()}
        <View style={styles.horizontalLine} />
        {this.renderPriceView()}
        {this.renderSortByView()}
        {this.renderBottomView()}
      </ScrollView>

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
  saveFilters: (data) => {
    return dispatch(brandActions.saveFilters(data));
  },
  getAllProducts: (page, data, getAllProductsSuccess) => {
    return dispatch(productActions.getAllProducts(page, data, getAllProductsSuccess));
  },
  resetAllProducts: () => {
    return dispatch(productActions.resetAllProducts());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FilterComponent);
