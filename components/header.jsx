import React, { useState, useEffect } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Menu, Text } from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';

const MultiSelectDropdown = ({ title, onSelect }) => {
  const [visible, setVisible] = useState(false);
  const [selectedItems, setSelectedItems] = useState([]);

  useEffect(() => {
    if (onSelect) {
      onSelect(selectedItems);
    }
  }, [selectedItems]);

  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);

  const toggleItem = (item) => {
    if (selectedItems.includes(item)) {
      setSelectedItems(selectedItems.filter(i => i !== item));
    } else {
      setSelectedItems([...selectedItems, item]);
    }
  };

  const items = ["Human", "Alien", "Male", "Female"];

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.title}>{title}</Text>
        <Menu
          visible={visible}
          onDismiss={closeMenu}
          anchor={
            <TouchableOpacity onPress={openMenu}>
              <Ionicons name="options" color="white" size={30} />
            </TouchableOpacity>
          }
          contentStyle={styles.menuContent}
          anchorPosition="top"
        >
          {items.map((item, index) => (
            <Menu.Item
              key={index}
              onPress={() => toggleItem(item)}
              title={
                <View style={styles.menuItem}>
                  <Text style={styles.menuItemText}>{item}</Text>
                  <View style={styles.checkboxContainer}>
                  {selectedItems.includes(item) ? <AntDesign name="check" color="white" size={16} /> : null}
                  </View>
                </View>
              }
            />
          ))}
        </Menu>
      </View>
      <Text style={styles.selectedText}>
        Selected: {selectedItems.join(', ') || 'None'}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'white',
    fontFamily: 'times'
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderColor: 'white',
    borderRadius:10,
    flex: 1, 
    padding: 5,
    gap:10,
    paddingRight:15, 
  },
  menuItemText: {
    color: 'white',
    flex: 1,
  },
  menuContent: {
    width: 140,
    marginTop: 40,
    alignSelf: 'flex-end',
    borderRadius: 15,
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  selectedText: {
    marginTop: 10,
    fontSize: 16,
    color: 'white',
  },
  checkboxContainer: {
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  checkbox: {
  },
});

export default MultiSelectDropdown;
