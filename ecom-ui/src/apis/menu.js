import menuData from "apis/dataMenu.json";

const LEVEL_MENU_1 = 1;
const LEVEL_MENU_2 = 2;

function getMenuData() {
  let menuItems = [];
  for (let index = 0; index < menuData.length; index++) {
    const menuItem = menuData[index];
    if (!menuItem.delete_flat) {
      menuItems.push(menuItem);
    }
  }
  const sortedMenuData = sortMenuOrder(menuItems);
  return sortedMenuData;
}

const menuAllItems = getMenuData();

function getMenuItemsLevel1() {
  let menuItemsLevel1 = [];
  for (let i = 0; i < menuAllItems.length; i++) {
    const item = menuAllItems[i];
    if (item.level === LEVEL_MENU_1) {
      menuItemsLevel1.push(item);
    }
  }
  return menuItemsLevel1;
}

function getMenuItemsLevel2() {
  let menuItemsLevel2 = [];
  for (let i = 0; i < menuAllItems.length; i++) {
    const item = menuAllItems[i];
    if (item.level === LEVEL_MENU_2) {
      menuItemsLevel2.push(item);
    }
  }
  return menuItemsLevel2;
}

function getMenuItemsLevel2ParentCodes() {
  const menuItemsLevel2 = getMenuItemsLevel2();
  let menuItemsLevel2ParentCodes = [];
  for (let i = 0; i < menuItemsLevel2.length; i++) {
    const item = menuItemsLevel2[i];
    menuItemsLevel2ParentCodes.push(item.parentMenuItemCode);
  }
  return menuItemsLevel2ParentCodes;
}

function sortMenuOrder(menuData) {
  menuData.sort(function(firstElement, secondElement) {
    return firstElement.order - secondElement.order;
  });
  return menuData;
}

export {
  getMenuData,
  getMenuItemsLevel1,
  getMenuItemsLevel2,
  getMenuItemsLevel2ParentCodes
};
