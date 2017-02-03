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
      'isRequired': '必ず入力してください。',
      'onValidateCallback': '無効な入力値です。',
      'AlphaNumericOrWhitespaceValidationRule': function AlphaNumericOrWhitespaceValidationRule(newValue, threshold) {
        return '\u82F1\u6570\u5B57\u307E\u305F\u306F\u534A\u89D2\u30B9\u30DA\u30FC\u30B9\u306E\u307F\u5165\u529B\u53EF\u80FD\u3067\u3059\u3002';
      },
      'AlphaNumericValidationRule': function AlphaNumericValidationRule(newValue, threshold) {
        return '\u534A\u89D2\u82F1\u6570\u5B57\u306E\u307F\u5165\u529B\u53EF\u80FD\u3067\u3059\u3002';
      },
      'AlphaValidationRule': function AlphaValidationRule(newValue, threshold) {
        return '\u534A\u89D2\u30A2\u30EB\u30D5\u30A1\u30D9\u30C3\u30C8\u306E\u307F\u5165\u529B\u53EF\u80FD\u3067\u3059\u3002';
      },
      'AlphaOrWhitespaceValidationRule': function AlphaOrWhitespaceValidationRule(newValue, threshold) {
        return '\u534A\u89D2\u30A2\u30EB\u30D5\u30A1\u30D9\u30C3\u30C8\u307E\u305F\u306F\u534A\u89D2\u30B9\u30DA\u30FC\u30B9\u306E\u307F\u5165\u529B\u53EF\u80FD\u3067\u3059\u3002';
      },
      'BetweenLengthValidationRule': function BetweenLengthValidationRule(newValue, threshold) {
        return _utilities.Utilities.getValue(threshold.minimumLength) + '\u6587\u5B57\u4EE5\u4E0A' + _utilities.Utilities.getValue(threshold.maximumLength) + '\u6587\u5B57\u4EE5\u5185\u3067\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044\u3002';
      },
      'BetweenValueValidationRule': function BetweenValueValidationRule(newValue, threshold) {
        return _utilities.Utilities.getValue(threshold.minimumValue) + '\u4EE5\u4E0A' + _utilities.Utilities.getValue(threshold.maximumValue) + '\u4EE5\u5185\u3067\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044\u3002';
      },
      'CustomFunctionValidationRule': function CustomFunctionValidationRule(newValue, threshold) {
        return '\u7121\u52B9\u306A\u5165\u529B\u5024\u3067\u3059\u3002';
      },
      'DigitValidationRule': function DigitValidationRule(newValue, threshold) {
        return '\u6570\u5B57\u306E\u307F\u5165\u529B\u53EF\u80FD\u3067\u3059\u3002';
      },
      'EmailValidationRule': function EmailValidationRule(newValue, threshold) {
        return '\u7121\u52B9\u306A\u30E1\u30FC\u30EB\u30A2\u30C9\u30EC\u30B9\u3067\u3059\u3002';
      },
      'EqualityValidationRule': function EqualityValidationRule(newValue, threshold) {
        return _utilities.Utilities.getValue(threshold.otherValue) + '\u3067\u3042\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002';
      },
      'InEqualityValidationRule': function InEqualityValidationRule(newValue, threshold) {
        return _utilities.Utilities.getValue(threshold.otherValue) + '\u306F\u6307\u5B9A\u3067\u304D\u307E\u305B\u3093\u3002';
      },
      'EqualityWithOtherLabelValidationRule': function EqualityWithOtherLabelValidationRule(newValue, threshold) {
        return _utilities.Utilities.getValue(threshold.otherValueLabel) + '\u3068\u4E00\u81F4\u3057\u307E\u305B\u3093\u3002';
      },
      'InEqualityWithOtherLabelValidationRule': function InEqualityWithOtherLabelValidationRule(newValue, threshold) {
        return _utilities.Utilities.getValue(threshold.otherValueLabel) + '\u3068\u540C\u3058\u5024\u306F\u6307\u5B9A\u3067\u304D\u307E\u305B\u3093\u3002';
      },
      'InCollectionValidationRule': function InCollectionValidationRule(newValue, threshold) {
        return '\u7121\u52B9\u306A\u5165\u529B\u5024\u3067\u3059\u3002';
      },
      'MinimumInclusiveValueValidationRule': function MinimumInclusiveValueValidationRule(newValue, threshold) {
        return _utilities.Utilities.getValue(threshold) + '\u4EE5\u4E0A\u3067\u3042\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002';
      },
      'MinimumLengthValidationRule': function MinimumLengthValidationRule(newValue, threshold) {
        return _utilities.Utilities.getValue(threshold) + '\u6587\u5B57\u4EE5\u4E0A\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044\u3002';
      },
      'MinimumValueValidationRule': function MinimumValueValidationRule(newValue, threshold) {
        return _utilities.Utilities.getValue(threshold) + '\u3088\u308A\u5927\u304D\u306A\u5024\u3092\u6307\u5B9A\u3057\u3066\u304F\u3060\u3055\u3044\u3002';
      },
      'MaximumInclusiveValueValidationRule': function MaximumInclusiveValueValidationRule(newValue, threshold) {
        return _utilities.Utilities.getValue(threshold) + '\u4EE5\u4E0B\u3067\u3042\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002';
      },
      'MaximumLengthValidationRule': function MaximumLengthValidationRule(newValue, threshold) {
        return _utilities.Utilities.getValue(threshold) + '\u6587\u5B57\u4EE5\u4E0B\u3067\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044\u3002';
      },
      'MaximumValueValidationRule': function MaximumValueValidationRule(newValue, threshold) {
        return _utilities.Utilities.getValue(threshold) + '\u3088\u308A\u5C0F\u3055\u3044\u5024\u3092\u6307\u5B9A\u3057\u3066\u304F\u3060\u3055\u3044\u3002';
      },
      'NumericValidationRule': function NumericValidationRule(newValue, threshold) {
        return '\u6570\u5024\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044\u3002';
      },
      'NoSpacesValidationRule': function NoSpacesValidationRule(newValue, threshold) {
        return '\u7A7A\u767D\u306F\u542B\u3081\u306A\u3044\u3067\u304F\u3060\u3055\u3044\u3002';
      },
      'RegexValidationRule': function RegexValidationRule(newValue, threshold) {
        return '\u7121\u52B9\u306A\u5165\u529B\u5024\u3067\u3059\u3002';
      },
      'ContainsOnlyValidationRule': function ContainsOnlyValidationRule(newValue, threshold) {
        return '\u7121\u52B9\u306A\u5165\u529B\u5024\u3067\u3059\u3002';
      },
      'StrongPasswordValidationRule': function StrongPasswordValidationRule(newValue, threshold) {
        return '\u5C0F\u6587\u5B57\u3001\u5927\u6587\u5B57\u3001\u6570\u5B57\u3001\u304A\u3088\u3073\u8A18\u53F7\u3092\u305D\u308C\u305E\u308C\u542B\u3081\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002';
      },
      'MediumPasswordValidationRule': function MediumPasswordValidationRule(newValue, threshold) {
        return '\u5C0F\u6587\u5B57\u3001\u5927\u6587\u5B57\u3001\u6570\u5B57\u3001\u8A18\u53F7\u306E\u3046\u3061' + _utilities.Utilities.getValue(threshold) + '\u7A2E\u985E\u306E\u6587\u5B57\u3092\u542B\u3081\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002';
      },
      'URLValidationRule': function URLValidationRule(newValue, threshold) {
        return '\u7121\u52B9\u306AURL\u3067\u3059\u3002';
      }
    }
  };
});