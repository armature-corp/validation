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
      'isRequired': 'er påkrævet',
      'onValidateCallback': 'ikke gyldig værdi',
      'AlphaNumericOrWhitespaceValidationRule': function AlphaNumericOrWhitespaceValidationRule(newValue, threshold) {
        return 'kan kun indeholde alfanumeriske tegn eller mellemrum';
      },
      'AlphaNumericValidationRule': function AlphaNumericValidationRule(newValue, threshold) {
        return 'kan kun indeholde alfanumeriske tegn';
      },
      'AlphaValidationRule': function AlphaValidationRule(newValue, threshold) {
        return 'kan kun indeholde bogstaver';
      },
      'AlphaOrWhitespaceValidationRule': function AlphaOrWhitespaceValidationRule(newValue, threshold) {
        return 'kan kun indeholde bogstaver og mellemrum';
      },
      'BetweenLengthValidationRule': function BetweenLengthValidationRule(newValue, threshold) {
        return 'skal v\xE6re imellem ' + _utilities.Utilities.getValue(threshold.minimumLength) + ' og ' + _utilities.Utilities.getValue(threshold.maximumLength) + ' tegn lang';
      },
      'BetweenValueValidationRule': function BetweenValueValidationRule(newValue, threshold) {
        return 'skal v\xE6re imellem ' + _utilities.Utilities.getValue(threshold.minimumValue) + ' og ' + _utilities.Utilities.getValue(threshold.maximumValue);
      },
      'CustomFunctionValidationRule': function CustomFunctionValidationRule(newValue, threshold) {
        return 'ikke en gyldig v\xE6rdi';
      },
      'DigitValidationRule': function DigitValidationRule(newValue, threshold) {
        return 'kan kun indeholde tal';
      },
      'EmailValidationRule': function EmailValidationRule(newValue, threshold) {
        return 'ikke gyldig e-mailadresse';
      },
      'EqualityValidationRule': function EqualityValidationRule(newValue, threshold) {
        return 'burde v\xE6re ' + _utilities.Utilities.getValue(threshold.otherValue);
      },
      'InEqualityValidationRule': function InEqualityValidationRule(newValue, threshold) {
        return 'kan ikke v\xE6re ' + _utilities.Utilities.getValue(threshold.otherValue);
      },
      'EqualityWithOtherLabelValidationRule': function EqualityWithOtherLabelValidationRule(newValue, threshold) {
        return 'er ikke ens ' + _utilities.Utilities.getValue(threshold.otherValueLabel);
      },
      'InEqualityWithOtherLabelValidationRule': function InEqualityWithOtherLabelValidationRule(newValue, threshold) {
        return 'kan ikke v\xE6re ens ' + _utilities.Utilities.getValue(threshold.otherValueLabel);
      },
      'InCollectionValidationRule': function InCollectionValidationRule(newValue, threshold) {
        return 'ikke en gyldig v\xE6rdi';
      },
      'MinimumInclusiveValueValidationRule': function MinimumInclusiveValueValidationRule(newValue, threshold) {
        return 'skal v\xE6re ' + _utilities.Utilities.getValue(threshold) + ' eller h\xF8jere';
      },
      'MinimumLengthValidationRule': function MinimumLengthValidationRule(newValue, threshold) {
        return 'skal v\xE6re mindst ' + _utilities.Utilities.getValue(threshold) + ' tegn lang';
      },
      'MinimumValueValidationRule': function MinimumValueValidationRule(newValue, threshold) {
        return 'skal v\xE6re st\xF8rre end ' + _utilities.Utilities.getValue(threshold);
      },
      'MaximumInclusiveValueValidationRule': function MaximumInclusiveValueValidationRule(newValue, threshold) {
        return 'skal v\xE6re ' + _utilities.Utilities.getValue(threshold) + ' eller mindre';
      },
      'MaximumLengthValidationRule': function MaximumLengthValidationRule(newValue, threshold) {
        return 'kan ikke v\xE6re l\xE6ngere end ' + _utilities.Utilities.getValue(threshold) + ' tegn';
      },
      'MaximumValueValidationRule': function MaximumValueValidationRule(newValue, threshold) {
        return 'skal v\xE6re mindre end ' + _utilities.Utilities.getValue(threshold);
      },
      'NumericValidationRule': function NumericValidationRule(newValue, threshold) {
        return 'skal v\xE6re en talv\xE6rdi';
      },
      'NoSpacesValidationRule': function NoSpacesValidationRule(newValue, threshold) {
        return 'm\xE5 ikke indeholde mellemrum';
      },
      'RegexValidationRule': function RegexValidationRule(newValue, threshold) {
        return 'ikke en gyldig v\xE6rdi';
      },
      'ContainsOnlyValidationRule': function ContainsOnlyValidationRule(newValue, threshold) {
        return 'ikke en gyldig v\xE6rdi';
      },
      'StrongPasswordValidationRule': function StrongPasswordValidationRule(newValue, threshold) {
        return 'skal v\xE6re en kombination af sm\xE5 bogstaver, store bogstaver, tal og specialtegn';
      },
      'MediumPasswordValidationRule': function MediumPasswordValidationRule(newValue, threshold) {
        return 'skal indeholde mindst ' + _utilities.Utilities.getValue(threshold) + ' af de f\xF8lgende grupper: sm\xE5 bogstaver, store bogstaver, tal og specialtegn';
      },
      'URLValidationRule': function URLValidationRule(newValue, threshold) {
        return 'ikke en gyldig URL';
      }
    }
  };
});