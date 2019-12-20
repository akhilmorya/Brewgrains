import React, { Component } from 'react';
import {
  View, Text, FlatList, Image, TouchableOpacity, TextInput,
} from 'react-native';
import Icons from 'react-native-vector-icons/Ionicons';
import { connect } from 'react-redux';
import * as CONST from '../../../../utils/constants';
import * as brandActions from '../../../../actions/brandActions';
import styles from './BrandsComponentStyle';

class BrandsComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchBrandsText: '',
      brandsList: [],
      searchedBrands: []
    };
  }

  componentDidMount() {
    const { filters } = this.props;
    this.setState({ searchedBrands: this.props.allBrands, brandsList: this.props.allBrands });
  }

  searchFilterFunction(searchedBrand) {
    const newData = this.state.brandsList.filter((item) => {
      const itemData = item.name.toLowerCase();
      const textData = searchedBrand.toLowerCase();
      return itemData.toString().indexOf(textData) > -1;
    });
    this.setState({ searchedBrands: newData });
  }

  selectBrands(item) {
    const localBrands = this.state.searchedBrands;
    const selectedIndex = localBrands.findIndex((brands) => brands.id === item.id);
    localBrands[selectedIndex].selected = !item.selected;
    this.setState({ searchedBrands: localBrands });
  }

  onPressCrossIcon() {
    this.props.navigation.goBack();
  }

  onPressCrossSearch() {
    this.setState({ searchBrandsText: '' }, () => {
      this.searchFilterFunction(this.state.searchBrandsText);
    });
  }

  onChangeText(searchText) {
    this.setState({ searchBrandsText: searchText }, () => {
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

  renderBrandsHeader() {
    return (
      <View style={styles.brandsHeader}>
        <Text style={styles.brandsText}>Brands</Text>
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
          value={this.state.searchBrandsText}
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

  renderBrandsList() {
    return (
      <View style={styles.listContainer}>
        <FlatList
          keyExtractor={(item, index) => index.toString()}
          data={this.state.searchedBrands}
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
        {this.renderBrandsHeader()}
        {this.renderSearchContainer()}
        {this.renderBrandsList()}
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
)(BrandsComponent);
