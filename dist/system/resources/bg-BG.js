'use strict';

System.register(['../utilities'], function (_export, _context) {
  "use strict";

  var Utilities, data;
  return {
    setters: [function (_utilities) {
      Utilities = _utilities.Utilities;
    }],
    execute: function () {
      _export('data', data = {
        settings: {
          'numericRegex': /^-?(?:\d+|\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/
        },
        messages: {
          'isRequired': 'е задължително',
          'onValidateCallback': 'невалидна стойност',
          'AlphaNumericOrWhitespaceValidationRule': function AlphaNumericOrWhitespaceValidationRule(newValue, threshold) {
            return '\u0442\u0440\u044F\u0431\u0432\u0430 \u0434\u0430 \u0441\u044A\u0434\u044A\u0440\u0436\u0430 \u0441\u0430\u043C\u043E \u0431\u0443\u043A\u0432\u0438, \u0446\u0438\u0444\u0440\u0438 \u0438 \u0438\u043D\u0442\u0435\u0440\u0432\u0430\u043B\u0438';
          },
          'AlphaNumericValidationRule': function AlphaNumericValidationRule(newValue, threshold) {
            return '\u0442\u0440\u044F\u0431\u0432\u0430 \u0434\u0430 \u0441\u044A\u0434\u044A\u0440\u0436\u0430 \u0441\u0430\u043C\u043E \u0431\u0443\u043A\u0432\u0438 \u0438 \u0446\u0438\u0444\u0440\u0438';
          },
          'AlphaValidationRule': function AlphaValidationRule(newValue, threshold) {
            return '\u0442\u0440\u044F\u0431\u0432\u0430 \u0434\u0430 \u0441\u044A\u0434\u044A\u0440\u0436\u0430 \u0441\u0430\u043C\u043E \u0431\u0443\u043A\u0432\u0438';
          },
          'AlphaOrWhitespaceValidationRule': function AlphaOrWhitespaceValidationRule(newValue, threshold) {
            return '\u0442\u0440\u044F\u0431\u0432\u0430 \u0434\u0430 \u0441\u044A\u0434\u044A\u0440\u0436\u0430 \u0441\u0430\u043C\u043E \u0431\u0443\u043A\u0432\u0438 \u0438\u043B\u0438 \u0438\u043D\u0442\u0435\u0440\u0432\u0430\u043B\u0438';
          },
          'BetweenLengthValidationRule': function BetweenLengthValidationRule(newValue, threshold) {
            return '\u0431\u0440\u043E\u044F\u0442 \u043D\u0430 \u0441\u0438\u043C\u0432\u043E\u043B\u0438\u0442\u0435 \u0442\u0440\u044F\u0431\u0432\u0430 \u0434\u0430 \u0431\u044A\u0434\u0435 \u043C\u0435\u0436\u0434\u0443 ' + Utilities.getValue(threshold.minimumLength) + ' \u0438 ' + Utilities.getValue(threshold.maximumLength);
          },
          'BetweenValueValidationRule': function BetweenValueValidationRule(newValue, threshold) {
            return '\u0441\u0442\u043E\u0439\u043D\u043E\u0441\u0442\u0442\u0430 \u0442\u0440\u044F\u0431\u0432\u0430 \u0434\u0430 \u0431\u044A\u0434\u0435 \u043C\u0435\u0436\u0434\u0443 ' + Utilities.getValue(threshold.minimumValue) + ' \u0438 ' + Utilities.getValue(threshold.maximumValue);
          },
          'CustomFunctionValidationRule': function CustomFunctionValidationRule(newValue, threshold) {
            return '\u043D\u0435\u0432\u0430\u043B\u0438\u0434\u043D\u0430 \u0441\u0442\u043E\u0439\u043D\u043E\u0441\u0442';
          },
          'DigitValidationRule': function DigitValidationRule(newValue, threshold) {
            return '\u0442\u0440\u044F\u0431\u0432\u0430 \u0434\u0430 \u0441\u044A\u0434\u044A\u0440\u0436\u0430 \u0441\u0430\u043C\u043E \u0446\u0438\u0444\u0440\u0438';
          },
          'EmailValidationRule': function EmailValidationRule(newValue, threshold) {
            return '\u043D\u0435\u0432\u0430\u043B\u0438\u0434\u043D\u0430 \u0435\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u0430 \u043F\u043E\u0449\u0430';
          },
          'EqualityValidationRule': function EqualityValidationRule(newValue, threshold) {
            return '\u0441\u0442\u043E\u0439\u043D\u043E\u0441\u0442\u0442\u0430 \u0442\u0440\u044F\u0431\u0432\u0430 \u0434\u0430 \u0431\u044A\u0434\u0435 ' + Utilities.getValue(threshold.otherValue);
          },
          'InEqualityValidationRule': function InEqualityValidationRule(newValue, threshold) {
            return '\u0441\u0442\u043E\u0439\u043D\u043E\u0441\u0442\u0442\u0430 \u043D\u0435 \u043C\u043E\u0436\u0435 \u0434\u0430 \u0431\u044A\u0434\u0435 ' + Utilities.getValue(threshold.otherValue);
          },
          'EqualityWithOtherLabelValidationRule': function EqualityWithOtherLabelValidationRule(newValue, threshold) {
            return '\u0441\u0442\u043E\u0439\u043D\u043E\u0441\u0442\u0442\u0430 \u043D\u0435 \u0441\u044A\u0432\u043F\u0430\u0434\u0430 \u0441 ' + Utilities.getValue(threshold.otherValueLabel);
          },
          'InEqualityWithOtherLabelValidationRule': function InEqualityWithOtherLabelValidationRule(newValue, threshold) {
            return '\u0441\u0442\u043E\u0439\u043D\u043E\u0441\u0442\u0442\u0430 \u043D\u0435 \u043C\u043E\u0436\u0435 \u0434\u0430 \u0441\u044A\u0432\u043F\u0430\u0434\u0430 \u0441 ' + Utilities.getValue(threshold.otherValueLabel);
          },
          'InCollectionValidationRule': function InCollectionValidationRule(newValue, threshold) {
            return '\u043D\u0435\u0432\u0430\u043B\u0438\u0434\u043D\u0430 \u0441\u0442\u043E\u0439\u043D\u043E\u0441\u0442';
          },
          'MinimumInclusiveValueValidationRule': function MinimumInclusiveValueValidationRule(newValue, threshold) {
            return '\u0441\u0442\u043E\u0439\u043D\u043E\u0441\u0442\u0442\u0430 \u0442\u0440\u044F\u0431\u0432\u0430 \u0434\u0430 \u0431\u044A\u0434\u0435 ' + Utilities.getValue(threshold) + ' \u0438\u043B\u0438 \u043F\u043E\u0432\u0435\u0447\u0435';
          },
          'MinimumLengthValidationRule': function MinimumLengthValidationRule(newValue, threshold) {
            return '\u0431\u0440\u043E\u044F\u0442 \u043D\u0430 \u0441\u0438\u043C\u0432\u043E\u043B\u0438\u0442\u0435 \u0442\u0440\u044F\u0431\u0432\u0430 \u0434\u0430 \u0431\u044A\u0434\u0435 \u043F\u043E\u043D\u0435 ' + Utilities.getValue(threshold);
          },
          'MinimumValueValidationRule': function MinimumValueValidationRule(newValue, threshold) {
            return '\u0441\u0442\u043E\u0439\u043D\u043E\u0441\u0442\u0442\u0430 \u0442\u0440\u044F\u0431\u0432\u0430 \u0434\u0430 \u0431\u044A\u0434\u0435 \u043F\u043E\u0432\u0435\u0447\u0435 \u043E\u0442 ' + Utilities.getValue(threshold);
          },
          'MaximumInclusiveValueValidationRule': function MaximumInclusiveValueValidationRule(newValue, threshold) {
            return '\u0441\u0442\u043E\u0439\u043D\u043E\u0441\u0442\u0442\u0430 \u0442\u0440\u044F\u0431\u0432\u0430 \u0434\u0430 \u0431\u044A\u0434\u0435 ' + Utilities.getValue(threshold) + ' \u0438\u043B\u0438 \u043F\u043E-\u043C\u0430\u043B\u043A\u043E';
          },
          'MaximumLengthValidationRule': function MaximumLengthValidationRule(newValue, threshold) {
            return '\u0431\u0440\u043E\u044F\u0442 \u043D\u0430 \u0441\u0438\u043C\u0432\u043E\u043B\u0438\u0442\u0435 \u043D\u0435 \u043C\u043E\u0436\u0435 \u0434\u0430 \u0431\u044A\u0434\u0435 \u043F\u043E\u0432\u0435\u0447\u0435 \u043E\u0442 ' + Utilities.getValue(threshold);
          },
          'MaximumValueValidationRule': function MaximumValueValidationRule(newValue, threshold) {
            return '\u0441\u0442\u043E\u0439\u043D\u043E\u0441\u0442\u0442\u0430 \u0442\u0440\u044F\u0431\u0432\u0430 \u0434\u0430 \u0431\u044A\u0434\u0435 \u043F\u043E-\u043C\u0430\u043B\u043A\u043E \u043E\u0442 ' + Utilities.getValue(threshold);
          },
          'NumericValidationRule': function NumericValidationRule(newValue, threshold) {
            return '\u0441\u0442\u043E\u0439\u043D\u043E\u0441\u0442\u0442\u0430 \u043D\u0430 \u043F\u043E\u043B\u0435\u0442\u043E \u0442\u0440\u044F\u0431\u0432\u0430 \u0434\u0430 \u0431\u044A\u0434\u0435 \u0447\u0438\u0441\u043B\u043E';
          },
          'RegexValidationRule': function RegexValidationRule(newValue, threshold) {
            return '\u043D\u0435\u0432\u0430\u043B\u0438\u0434\u043D\u0430 \u0441\u0442\u043E\u0439\u043D\u043E\u0441\u0442';
          },
          'ContainsOnlyValidationRule': function ContainsOnlyValidationRule(newValue, threshold) {
            return '\u043D\u0435\u0432\u0430\u043B\u0438\u0434\u043D\u0430 \u0441\u0442\u043E\u0439\u043D\u043E\u0441\u0442';
          },
          'StrongPasswordValidationRule': function StrongPasswordValidationRule(newValue, threshold) {
            return '\u0442\u0440\u044F\u0431\u0432\u0430 \u0434\u0430 \u0441\u044A\u0434\u044A\u0440\u0436\u0430 \u043A\u043E\u043C\u0431\u0438\u043D\u0430\u0446\u0438\u044F \u043E\u0442 \u043C\u0430\u043B\u043A\u0438 \u0438 \u0433\u043E\u043B\u0435\u043C\u0438 \u0431\u0443\u043A\u0432\u0438, \u0446\u0438\u0444\u0440\u0438 \u0438 \u0441\u043F\u0435\u0446\u0438\u0430\u043B\u043D\u0438 \u0437\u043D\u0430\u0446\u0438';
          },
          'MediumPasswordValidationRule': function MediumPasswordValidationRule(newValue, threshold) {
            return '\u0442\u0440\u044F\u0431\u0432\u0430 \u0434\u0430 \u0441\u044A\u0434\u044A\u0440\u0436\u0430 \u043F\u043E\u043D\u0435  ' + Utilities.getValue(threshold) + ' \u043E\u0442 \u0441\u043B\u0435\u0434\u043D\u0438\u0442\u0435 \u0433\u0440\u0443\u043F\u0438: \u043C\u0430\u043B\u043A\u0438 \u0438 \u0433\u043E\u043B\u0435\u043C\u0438 \u0431\u0443\u043A\u0432\u0438, \u0446\u0438\u0444\u0440\u0438 \u0438 \u0441\u043F\u0435\u0446\u0438\u0430\u043B\u043D\u0438 \u0437\u043D\u0430\u0446\u0438';
          }
        }
      });

      _export('data', data);
    }
  };
});