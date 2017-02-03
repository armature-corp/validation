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
          'isRequired': 'är obligatoriskt',
          'onValidateCallback': 'är inte ett giltigt värde',
          'AlphaNumericOrWhitespaceValidationRule': function AlphaNumericOrWhitespaceValidationRule(newValue, threshold) {
            return 'kan enbart inneh\xE5lla alfanumeriska tecken eller mellanslag';
          },
          'AlphaNumericValidationRule': function AlphaNumericValidationRule(newValue, threshold) {
            return 'kan enbart inneh\xE5lla alfanumeriska tecken';
          },
          'AlphaValidationRule': function AlphaValidationRule(newValue, threshold) {
            return 'kan enbart inneh\xE5lla bokst\xE4ver eller mellanslag';
          },
          'AlphaOrWhitespaceValidationRule': function AlphaOrWhitespaceValidationRule(newValue, threshold) {
            return 'kan enbart inneh\xE5lla bokst\xE4ver';
          },
          'BetweenLengthValidationRule': function BetweenLengthValidationRule(newValue, threshold) {
            return 'm\xE5ste vara mellan ' + Utilities.getValue(threshold.minimumLength) + ' och ' + Utilities.getValue(threshold.maximumLength) + ' tecken l\xE5ngt';
          },
          'BetweenValueValidationRule': function BetweenValueValidationRule(newValue, threshold) {
            return 'm\xE5ste vara mellan ' + Utilities.getValue(threshold.minimumValue) + ' och ' + Utilities.getValue(threshold.maximumValue);
          },
          'CustomFunctionValidationRule': function CustomFunctionValidationRule(newValue, threshold) {
            return '\xE4r inte ett giltigt v\xE4rde';
          },
          'DigitValidationRule': function DigitValidationRule(newValue, threshold) {
            return 'kan bara inneh\xE5lla siffror';
          },
          'EmailValidationRule': function EmailValidationRule(newValue, threshold) {
            return '\xE4r inte en giltig e-postadress';
          },
          'EqualityValidationRule': function EqualityValidationRule(newValue, threshold) {
            return 'ska vara ' + Utilities.getValue(threshold.otherValue);
          },
          'InEqualityValidationRule': function InEqualityValidationRule(newValue, threshold) {
            return 'kan inte vara ' + Utilities.getValue(threshold.otherValue);
          },
          'EqualityWithOtherLabelValidationRule': function EqualityWithOtherLabelValidationRule(newValue, threshold) {
            return 'matchar inte ' + Utilities.getValue(threshold.otherValueLabel);
          },
          'InEqualityWithOtherLabelValidationRule': function InEqualityWithOtherLabelValidationRule(newValue, threshold) {
            return 'f\xE5r inte matcha ' + Utilities.getValue(threshold.otherValueLabel);
          },
          'InCollectionValidationRule': function InCollectionValidationRule(newValue, threshold) {
            return '\xE4r inget giltigt v\xE4rde';
          },
          'MinimumInclusiveValueValidationRule': function MinimumInclusiveValueValidationRule(newValue, threshold) {
            return 'm\xE5ste vara ' + Utilities.getValue(threshold) + ' eller mer';
          },
          'MinimumLengthValidationRule': function MinimumLengthValidationRule(newValue, threshold) {
            return 'beh\xF6ver vara minst ' + Utilities.getValue(threshold) + ' tecken l\xE5ngt';
          },
          'MinimumValueValidationRule': function MinimumValueValidationRule(newValue, threshold) {
            return 'm\xE5ste vara mer \xE4n ' + Utilities.getValue(threshold);
          },
          'MaximumInclusiveValueValidationRule': function MaximumInclusiveValueValidationRule(newValue, threshold) {
            return 'm\xE5ste vara ' + Utilities.getValue(threshold) + ' eller mindre';
          },
          'MaximumLengthValidationRule': function MaximumLengthValidationRule(newValue, threshold) {
            return 'kan inte vara l\xE4ngre \xE4n ' + Utilities.getValue(threshold) + ' tecken';
          },
          'MaximumValueValidationRule': function MaximumValueValidationRule(newValue, threshold) {
            return 'm\xE5ste vara mindre \xE4n ' + Utilities.getValue(threshold);
          },
          'NumericValidationRule': function NumericValidationRule(newValue, threshold) {
            return 'm\xE5ste vara ett nummer';
          },
          'NoSpacesValidationRule': function NoSpacesValidationRule(newValue, threshold) {
            return 'kan inte inneh\xE5lla mellanslag';
          },
          'RegexValidationRule': function RegexValidationRule(newValue, threshold) {
            return '\xE4r inte ett giltigt v\xE4rde';
          },
          'ContainsOnlyValidationRule': function ContainsOnlyValidationRule(newValue, threshold) {
            return '\xE4r inte ett giltigt v\xE4rde';
          },
          'StrongPasswordValidationRule': function StrongPasswordValidationRule(newValue, threshold) {
            return 'ska inneh\xE5lla en kombination av gemener, versaler, siffror och specialtecken';
          },
          'MediumPasswordValidationRule': function MediumPasswordValidationRule(newValue, threshold) {
            return 'ska inneh\xE5lla minst ' + Utilities.getValue(threshold) + ' av f\xF6ljande grupperingar: gemener, versaler, siffror eller specialtecken';
          },
          'URLValidationRule': function URLValidationRule(newValue, threshold) {
            return '\xE4r inte en giltig webbadress';
          }
        }
      });

      _export('data', data);
    }
  };
});