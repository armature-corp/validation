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
          'numericRegex': /^-?(?:\d+)(?:\,\d+)?$/
        },
        messages: {
          'isRequired': 'est obligatoire',
          'onValidateCallback': 'n\'est pas une valeur valide',
          'AlphaNumericOrWhitespaceValidationRule': function AlphaNumericOrWhitespaceValidationRule(newValue, threshold) {
            return 'ne peut contenir que des caract\xE8res alphanum\xE9riques ou des espaces';
          },
          'AlphaNumericValidationRule': function AlphaNumericValidationRule(newValue, threshold) {
            return 'ne peut contenir que des caract\xE8res alphanum\xE9riques';
          },
          'AlphaValidationRule': function AlphaValidationRule(newValue, threshold) {
            return 'ne peut contenir que des lettres';
          },
          'AlphaOrWhitespaceValidationRule': function AlphaOrWhitespaceValidationRule(newValue, threshold) {
            return 'ne peut contenir que des lettres ou des espaces';
          },
          'BetweenLengthValidationRule': function BetweenLengthValidationRule(newValue, threshold) {
            return 'doit contenir de ' + Utilities.getValue(threshold.minimumLength) + ' \xE0 ' + Utilities.getValue(threshold.maximumLength) + ' caract\xE8res';
          },
          'BetweenValueValidationRule': function BetweenValueValidationRule(newValue, threshold) {
            return 'doit \xEAtre entre ' + Utilities.getValue(threshold.minimumValue) + ' et ' + Utilities.getValue(threshold.maximumValue);
          },
          'CustomFunctionValidationRule': function CustomFunctionValidationRule(newValue, threshold) {
            return 'n\'est pas une valeur valide';
          },
          'DigitValidationRule': function DigitValidationRule(newValue, threshold) {
            return 'doit contenir uniquement des caract\xE8res num\xE9riques';
          },
          'EmailValidationRule': function EmailValidationRule(newValue, threshold) {
            return 'n\'est pas une adresse email valide';
          },
          'EqualityValidationRule': function EqualityValidationRule(newValue, threshold) {
            return 'doit \xEAtre ' + Utilities.getValue(threshold.otherValue);
          },
          'InEqualityValidationRule': function InEqualityValidationRule(newValue, threshold) {
            return 'ne peut pas \xEAtre ' + Utilities.getValue(threshold.otherValue);
          },
          'EqualityWithOtherLabelValidationRule': function EqualityWithOtherLabelValidationRule(newValue, threshold) {
            return 'doit correspondre \xE0 ' + Utilities.getValue(threshold.otherValueLabel);
          },
          'InEqualityWithOtherLabelValidationRule': function InEqualityWithOtherLabelValidationRule(newValue, threshold) {
            return 'ne doit pas correspondre \xE0 ' + Utilities.getValue(threshold.otherValueLabel);
          },
          'InCollectionValidationRule': function InCollectionValidationRule(newValue, threshold) {
            return 'n\'est pas une valeur valide';
          },
          'MinimumInclusiveValueValidationRule': function MinimumInclusiveValueValidationRule(newValue, threshold) {
            return 'doit \xEAtre ' + Utilities.getValue(threshold) + ' ou plus';
          },
          'MinimumLengthValidationRule': function MinimumLengthValidationRule(newValue, threshold) {
            return 'doit contenir au moins ' + Utilities.getValue(threshold) + ' caract\xE8res';
          },
          'MinimumValueValidationRule': function MinimumValueValidationRule(newValue, threshold) {
            return 'doit \xEAtre plus que ' + Utilities.getValue(threshold);
          },
          'MaximumInclusiveValueValidationRule': function MaximumInclusiveValueValidationRule(newValue, threshold) {
            return 'doit \xEAtre moins que ' + Utilities.getValue(threshold);
          },
          'MaximumLengthValidationRule': function MaximumLengthValidationRule(newValue, threshold) {
            return 'ne doit pas contenir plus de ' + Utilities.getValue(threshold) + ' caract\xE8res';
          },
          'MaximumValueValidationRule': function MaximumValueValidationRule(newValue, threshold) {
            return 'doit \xEAtre ' + Utilities.getValue(threshold) + ' ou moins';
          },
          'NumericValidationRule': function NumericValidationRule(newValue, threshold) {
            return 'doit \xEAtre une valeur num\xE9rique';
          },
          'NoSpacesValidationRule': function NoSpacesValidationRule(newValue, threshold) {
            return 'ne peut pas contenir d\'espaces';
          },
          'RegexValidationRule': function RegexValidationRule(newValue, threshold) {
            return 'n\'est pas une valeur valide';
          },
          'ContainsOnlyValidationRule': function ContainsOnlyValidationRule(newValue, threshold) {
            return 'n\'est pas une valeur valide';
          },
          'StrongPasswordValidationRule': function StrongPasswordValidationRule(newValue, threshold) {
            return 'doit contenir une combinaison de lettres minuscules, de lettres majuscules, de caract\xE8res num\xE9riques et de caract\xE8res sp\xE9ciaux';
          },
          'MediumPasswordValidationRule': function MediumPasswordValidationRule(newValue, threshold) {
            return 'doit contenir au moins ' + Utilities.getValue(threshold) + ' des caract\xE9ristiques suivantes : lettres minuscules, lettres majuscules, caract\xE8res num\xE9riques ou caract\xE8res sp\xE9ciaux';
          },
          'URLValidationRule': function URLValidationRule(newValue, threshold) {
            return 'est pas un URL valide';
          }
        }
      });

      _export('data', data);
    }
  };
});