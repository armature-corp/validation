define(['exports', '../utilities'], function (exports, _utilities) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.data = undefined;
  var data = exports.data = {
    settings: {
      'numericRegex': /^-?(?:\d+|\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/
    },
    messages: {
      'isRequired': '必填字段',
      'onValidateCallback': '非法字段',
      'AlphaNumericOrWhitespaceValidationRule': function AlphaNumericOrWhitespaceValidationRule(newValue, threshold) {
        return '\u4E0D\u80FD\u4F7F\u7528\u7279\u6B8A\u5B57\u7B26';
      },
      'AlphaNumericValidationRule': function AlphaNumericValidationRule(newValue, threshold) {
        return '\u53EA\u80FD\u5305\u542B\u5B57\u6BCD\u6570\u5B57\u5B57\u7B26';
      },
      'AlphaValidationRule': function AlphaValidationRule(newValue, threshold) {
        return '\u53EA\u80FD\u5305\u542B\u5B57\u6BCD';
      },
      'AlphaOrWhitespaceValidationRule': function AlphaOrWhitespaceValidationRule(newValue, threshold) {
        return '\u53EA\u80FD\u5305\u542B\u5B57\u6BCD\u6216\u7A7A\u683C';
      },
      'BetweenLengthValidationRule': function BetweenLengthValidationRule(newValue, threshold) {
        return '\u5B57\u7B26\u957F\u5EA6\u5E94\u8BE5\u5728 ' + _utilities.Utilities.getValue(threshold.minimumLength) + ' ~ ' + _utilities.Utilities.getValue(threshold.maximumLength) + ' \u4E4B\u95F4';
      },
      'BetweenValueValidationRule': function BetweenValueValidationRule(newValue, threshold) {
        return '\u5B57\u7B26\u957F\u5EA6\u5E94\u8BE5\u5728 ' + _utilities.Utilities.getValue(threshold.minimumValue) + ' ~ ' + _utilities.Utilities.getValue(threshold.maximumValue) + ' \u4E4B\u95F4';
      },
      'CustomFunctionValidationRule': function CustomFunctionValidationRule(newValue, threshold) {
        return '\u4E0D\u5408\u6CD5\u7684\u503C';
      },
      'DigitValidationRule': function DigitValidationRule(newValue, threshold) {
        return '\u53EA\u80FD\u5305\u542B\u6570\u5B57';
      },
      'EmailValidationRule': function EmailValidationRule(newValue, threshold) {
        return '\u90AE\u7BB1\u683C\u5F0F\u4E0D\u6B63\u786E';
      },
      'EqualityValidationRule': function EqualityValidationRule(newValue, threshold) {
        return '\u5E94\u8BE5\u7B49\u4E8E ' + _utilities.Utilities.getValue(threshold.otherValue);
      },
      'InEqualityValidationRule': function InEqualityValidationRule(newValue, threshold) {
        return '\u4E0D\u5E94\u8BE5\u7B49\u4E8E ' + _utilities.Utilities.getValue(threshold.otherValue);
      },
      'EqualityWithOtherLabelValidationRule': function EqualityWithOtherLabelValidationRule(newValue, threshold) {
        return '\u4E0E ' + _utilities.Utilities.getValue(threshold.otherValueLabel) + ' \u4E0D\u5339\u914D';
      },
      'InEqualityWithOtherLabelValidationRule': function InEqualityWithOtherLabelValidationRule(newValue, threshold) {
        return '\u4E0D\u5E94\u8BE5\u548C ' + _utilities.Utilities.getValue(threshold.otherValueLabel) + ' \u76F8\u7B49';
      },
      'InCollectionValidationRule': function InCollectionValidationRule(newValue, threshold) {
        return '\u4E0D\u5408\u6CD5\u7684\u503C';
      },
      'MinimumInclusiveValueValidationRule': function MinimumInclusiveValueValidationRule(newValue, threshold) {
        return '\u6700\u5C0F\u503C\u4E3A ' + _utilities.Utilities.getValue(threshold) + ' (\u5305\u542B)';
      },
      'MinimumLengthValidationRule': function MinimumLengthValidationRule(newValue, threshold) {
        return '\u6700\u5C0F\u5B57\u7B26\u957F\u5EA6\u4E3A ' + _utilities.Utilities.getValue(threshold);
      },
      'MinimumValueValidationRule': function MinimumValueValidationRule(newValue, threshold) {
        return '\u6700\u5C0F\u503C\u4E3A ' + _utilities.Utilities.getValue(threshold) + '(\u4E0D\u5305\u542B)';
      },
      'MaximumInclusiveValueValidationRule': function MaximumInclusiveValueValidationRule(newValue, threshold) {
        return '\u6700\u5927\u503C\u4E3A ' + _utilities.Utilities.getValue(threshold) + ' (\u5305\u542B)';
      },
      'MaximumLengthValidationRule': function MaximumLengthValidationRule(newValue, threshold) {
        return '\u6700\u5927\u5B57\u7B26\u957F\u5EA6\u4E3A ' + _utilities.Utilities.getValue(threshold);
      },
      'MaximumValueValidationRule': function MaximumValueValidationRule(newValue, threshold) {
        return '\u6700\u5927\u503C\u4E3A ' + _utilities.Utilities.getValue(threshold) + '(\u4E0D\u5305\u542B)';
      },
      'NumericValidationRule': function NumericValidationRule(newValue, threshold) {
        return '\u8BF7\u8F93\u5165\u4E00\u4E2A\u6570\u5B57';
      },
      'NoSpacesValidationRule': function NoSpacesValidationRule(newValue, threshold) {
        return '\u4E0D\u80FD\u5305\u542B\u7A7A\u5B57\u7B26';
      },
      'RegexValidationRule': function RegexValidationRule(newValue, threshold) {
        return '\u4E0D\u5408\u6CD5\u7684\u503C';
      },
      'ContainsOnlyValidationRule': function ContainsOnlyValidationRule(newValue, threshold) {
        return '\u4E0D\u5408\u6CD5\u7684\u503C';
      },
      'StrongPasswordValidationRule': function StrongPasswordValidationRule(newValue, threshold) {
        return '\u5E94\u5305\u542B\u5927\u5C0F\u5B57\u6BCD\uFF0C\u6570\u5B57\u548C\u7279\u6B8A\u5B57\u7B26';
      },
      'MediumPasswordValidationRule': function MediumPasswordValidationRule(newValue, threshold) {
        return '\u81F3\u5C11\u5305\u542B ' + _utilities.Utilities.getValue(threshold) + ' \u79CD\u4EE5\u4E0B\u7EC4\u5408:\u5C0F\u5199\u5B57\u6BCD,\u5927\u5199\u5B57\u6BCD,\u6570\u5B57\u548C\u7279\u6B8A\u5B57\u7B26';
      },
      'URLValidationRule': function URLValidationRule(newValue, threshold) {
        return 'URL\u683C\u5F0F\u4E0D\u6B63\u786E';
      }
    }
  };
});