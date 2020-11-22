/* Settings CONSTANTS */
const CHANGE_SETTING = 'CHANGE_SETTING'
const CHANGE_SETTING_BOOL = 'CHANGE_SETTING_BOOL'


/* SETTINGS REDUCER */
const initial = {
  tableofcontents: false,
  searchSection:false,
  searchString:'',
}

const settingsReducer = (state = initial, action) => {
  switch (action.type) {
    case CHANGE_SETTING_BOOL:
      let newstate = {};
      newstate[action.setting] = !state[action.setting];
      return Object.assign({}, state, newstate);
    case CHANGE_SETTING:
      return Object.assign({}, state, action.setting);
    default:
      return state;
  }
}

export default settingsReducer


/* SETTINGS ACTIONS */
export const changeSetting = (setting: String) => ({type: CHANGE_SETTING, setting});
export const changeSettingBool = (setting: String) => ({type: CHANGE_SETTING_BOOL, setting});
