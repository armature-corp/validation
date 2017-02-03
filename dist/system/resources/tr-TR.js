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
          'isRequired': 'gereklidir',
          'onValidateCallback': 'geçerli bir değer giriniz',
          'AlphaNumericOrWhitespaceValidationRule': function AlphaNumericOrWhitespaceValidationRule(newValue, threshold) {
            return 'sadece alfanumerik karakterler veya bo\u015Fluk girebilirsiniz';
          },
          'AlphaNumericValidationRule': function AlphaNumericValidationRule(newValue, threshold) {
            return 'sadece alfanumerik karakterleri girebilirsiniz';
          },
          'AlphaValidationRule': function AlphaValidationRule(newValue, threshold) {
            return 'sadece harf veya bo\u015Fluk girebilirsiniz';
          },
          'AlphaOrWhitespaceValidationRule': function AlphaOrWhitespaceValidationRule(newValue, threshold) {
            return 'sadece harf veya bo\u015Fluk girebilirsiniz';
          },
          'BetweenLengthValidationRule': function BetweenLengthValidationRule(newValue, threshold) {
            return 'uzunlu\u011Fu ' + Utilities.getValue(threshold.minimumLength) + ' ile ' + Utilities.getValue(threshold.maximumLength) + ' aras\u0131nda olmal\u0131d\u0131r';
          },
          'BetweenValueValidationRule': function BetweenValueValidationRule(newValue, threshold) {
            return Utilities.getValue(threshold.minimumValue) + ' ile ' + Utilities.getValue(threshold.maximumValue) + ' aras\u0131nda bir de\u011Fer giriniz';
          },
          'CustomFunctionValidationRule': function CustomFunctionValidationRule(newValue, threshold) {
            return 'ge\xE7erli bir de\u011Fer giriniz';
          },
          'DigitValidationRule': function DigitValidationRule(newValue, threshold) {
            return 'sadece rakam girebilirsiniz';
          },
          'EmailValidationRule': function EmailValidationRule(newValue, threshold) {
            return 'ge\xE7erli bir e-posta giriniz';
          },
          'EqualityValidationRule': function EqualityValidationRule(newValue, threshold) {
            return 'de\u011Fer ' + Utilities.getValue(threshold.otherValue) + '\'\'e e\u015Fit olmal\u0131d\u0131r';
          },
          'InEqualityValidationRule': function InEqualityValidationRule(newValue, threshold) {
            return 'de\u011Fer ' + Utilities.getValue(threshold.otherValue) + '\'\'den farkl\u0131 olmal\u0131d\u0131r';
          },
          'EqualityWithOtherLabelValidationRule': function EqualityWithOtherLabelValidationRule(newValue, threshold) {
            return 'de\u011Fer ' + Utilities.getValue(threshold.otherValueLabel) + '\'\'e e\u015Fit olmal\u0131d\u0131r';
          },
          'InEqualityWithOtherLabelValidationRule': function InEqualityWithOtherLabelValidationRule(newValue, threshold) {
            return 'de\u011Fer ' + Utilities.getValue(threshold.otherValueLabel) + '\'\'den farkl\u0131 olmal\u0131d\u0131r';
          },
          'InCollectionValidationRule': function InCollectionValidationRule(newValue, threshold) {
            return 'ge\xE7ersiz de\u011Fer';
          },
          'MinimumInclusiveValueValidationRule': function MinimumInclusiveValueValidationRule(newValue, threshold) {
            return 'de\u011Fer ' + Utilities.getValue(threshold) + ' veya daha fazla olmal\u0131d\u0131r';
          },
          'MinimumLengthValidationRule': function MinimumLengthValidationRule(newValue, threshold) {
            return 'de\u011Fer en az ' + Utilities.getValue(threshold) + ' karakter uzunlu\u011Funda olmal\u0131d\u0131r';
          },
          'MinimumValueValidationRule': function MinimumValueValidationRule(newValue, threshold) {
            return 'daha fazla olmal\u0131d\u0131r ' + Utilities.getValue(threshold);
          },
          'MaximumInclusiveValueValidationRule': function MaximumInclusiveValueValidationRule(newValue, threshold) {
            return 'de\u011Fer ' + Utilities.getValue(threshold) + '\'\'dan az olmal\u0131';
          },
          'MaximumLengthValidationRule': function MaximumLengthValidationRule(newValue, threshold) {
            return 'de\u011Fer ' + Utilities.getValue(threshold) + ' karakterden uzun olmamal\u0131d\u0131r';
          },
          'MaximumValueValidationRule': function MaximumValueValidationRule(newValue, threshold) {
            return 'de\u011Fer ' + Utilities.getValue(threshold) + '\'\'dan az olmal\u0131';
          },
          'NumericValidationRule': function NumericValidationRule(newValue, threshold) {
            return 'sadece say\u0131 girebilirsiniz';
          },
          'NoSpacesValidationRule': function NoSpacesValidationRule(newValue, threshold) {
            return 'bo\u015Fluk i\xE7eremez';
          },
          'RegexValidationRule': function RegexValidationRule(newValue, threshold) {
            return 'ge\xE7erli bir de\u011Fer giriniz';
          },
          'ContainsOnlyValidationRule': function ContainsOnlyValidationRule(newValue, threshold) {
            return 'ge\xE7erli bir de\u011Fer giriniz';
          },
          'StrongPasswordValidationRule': function StrongPasswordValidationRule(newValue, threshold) {
            return 'k\xFC\xE7\xFCk harfler, b\xFCy\xFCk harfler, say\u0131lar ve i\u015Faretlerin birle\u015Fimi olmal\u0131d\u0131r';
          },
          'MediumPasswordValidationRule': function MediumPasswordValidationRule(newValue, threshold) {
            return 'k\xFC\xE7\xFCk harfler, b\xFCy\xFCk harfler, say\u0131lar veya i\u015Faretlerden en az ' + Utilities.getValue(threshold) + ' de\u011Fi\u015Fik tip olmal\u0131';
          },
          'URLValidationRule': function URLValidationRule(newValue, threshold) {
            return 'Ge\xE7erli bir URL de\u011Fil';
          }
        }
      });

      _export('data', data);
    }
  };
});