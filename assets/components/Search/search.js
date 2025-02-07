import style from './style';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons';
import {Pressable} from 'react-native-gesture-handler';
import {useRef, useState} from 'react';
import {scaleFontSize} from '../../styles/scaling';
import PropTypes from 'prop-types';
import {TextInput} from 'react-native';

const Search = ({onSearch = () => {}, placeholder = 'Search'}) => {
  const textInputRef = useRef(null);
  const [search, setSearch] = useState('');

  const handleFocus = () => {
    textInputRef.current.focus();
  };

  const handleSearch = searchValue => {
    setSearch(searchValue);
    onSearch(searchValue);
  };

  return (
    <Pressable style={style.searchContainer} onPress={handleFocus}>
      <FontAwesomeIcon
        icon={faSearch}
        color={'#25C0FF'}
        size={scaleFontSize(22)}
      />
      <TextInput
        placeholder={placeholder}
        ref={textInputRef}
        style={style.searchInput}
        value={search}
        onChangeText={handleSearch}
      />
    </Pressable>
  );
};

Search.propTypes = {
  onSearch: PropTypes.func,
  placeholder: PropTypes.string,
};

export default Search;
