export const zhValidatorMessages = {
  accepted: '必须是可接受的.',
  alpha: '只能包含字母.',
  alpha_dash: '只能包含字母,连字符和下划线.',
  alpha_num: '只能包含字母和数字.',
  between: '的(大小,长度等)只能在:min和:max之间.',
  confirmed: '确认不一致.',
  email: '格式不正确.',
  date: '日期格式错误.',
  def: '属性错误.',
  digits: '必须是:digits位小数.',
  different: '和:different必须不同.',
  in: '选择的无效',
  integer: '必须是一个整数.',
  min: {
    numeric: '不能小于:min.',
    string: '长度不能小于:min.'
  },
  max: {
    numeric: '不能大于:max.',
    string: '长度不能大于:max.'
  },
  not_in: '所选的无效.',
  numeric: '必须是一个数字.',
  required: '不能为空.',
  required_if: '当:or是:value时,不能为空.',
  same: '和:same必须一致.',
  size: {
    numeric: '必须等于:size.',
    string: '的长度必须等于:size.'
  },
  string: '必须是一个字符串.',
  url: '格式不正确.',
  regex: '格式不正确.',
  attributes: {}
};

export const enValidatorMessages = {
  accepted: ' must be accepted.',
  after: ' must be after :after.',
  after_or_equal: ' must be equal or after :after_or_equal.',
  alpha: ' field must contain only alphabetic characters.',
  alpha_dash:
    ' field may only contain alpha-numeric characters, as well as dashes and underscores.',
  alpha_num: ' field must be alphanumeric.',
  before: ' must be before :before.',
  before_or_equal: ' must be equal or before :before_or_equal.',
  between: ' field must be between :min and :max.',
  confirmed: ' confirmation does not match.',
  email: ' format is invalid.',
  date: ' is not a valid date format.',
  def: ' attribute has errors.',
  digits: ' must be :digits digits.',
  different: ' and :different must be different.',
  in: ' selected is invalid.',
  integer: ' must be an integer.',
  min: {
    numeric: ' must be at least :min.',
    string: ' must be at least :min characters.'
  },
  max: {
    numeric: ' may not be greater than :max.',
    string: ' may not be greater than :max characters.'
  },
  not_in: ' selected is invalid.',
  numeric: ' must be a number.',
  present: ' field must be present (but can be empty).',
  required: ' field is required.',
  required_if: ' field is required when :or is :value.',
  required_unless: ' field is required when :or is not :value.',
  required_with: ' field is required when :field is not empty.',
  required_with_all: ' field is required when :fields are not empty.',
  required_without: ' field is required when :field is empty.',
  required_without_all: ' field is required when :fields are empty.',
  same: ' and :same fields must match.',
  size: {
    numeric: ' must be :size.',
    string: ' must be :size characters.'
  },
  string: ' must be a string.',
  url: ' format is invalid.',
  regex: ' format is invalid.',
  attributes: {}
};
