define(['exports', '../utilities'], function (exports, _utilities) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.data = undefined;
  var data = exports.data = {
    settings: {
      'numericRegex': /^-?(?:\d+)(?:\,\d+)?$/
    },
    messages: {
      'isRequired': 'es obligatorio',
      'onValidateCallback': 'no es un valor válido',
      'AlphaNumericOrWhitespaceValidationRule': function AlphaNumericOrWhitespaceValidationRule(newValue, threshold) {
        return 's\xF3lo puede contener caracteres alfanum\xE9ricos y espacios';
      },
      'AlphaNumericValidationRule': function AlphaNumericValidationRule(newValue, threshold) {
        return 's\xF3lo puede contener caracteres alfanum\xE9ricos';
      },
      'AlphaValidationRule': function AlphaValidationRule(newValue, threshold) {
        return 's\xF3lo puede contener letras';
      },
      'AlphaOrWhitespaceValidationRule': function AlphaOrWhitespaceValidationRule(newValue, threshold) {
        return 's\xF3lo puede contener letras y espacios';
      },
      'BetweenLengthValidationRule': function BetweenLengthValidationRule(newValue, threshold) {
        return 'debe tener entre ' + _utilities.Utilities.getValue(threshold.minimumLength) + ' y ' + _utilities.Utilities.getValue(threshold.maximumLength) + ' letras de largo';
      },
      'BetweenValueValidationRule': function BetweenValueValidationRule(newValue, threshold) {
        return 'debe tener un valor entre ' + _utilities.Utilities.getValue(threshold.minimumValue) + ' y ' + _utilities.Utilities.getValue(threshold.maximumValue);
      },
      'CustomFunctionValidationRule': function CustomFunctionValidationRule(newValue, threshold) {
        return 'es un valor inv\xE1lido';
      },
      'DigitValidationRule': function DigitValidationRule(newValue, threshold) {
        return 's\xF3lo puede contener n\xFAmeros';
      },
      'EmailValidationRule': function EmailValidationRule(newValue, threshold) {
        return 'no es un correo electr\xF3nico v\xE1lido';
      },
      'EqualityValidationRule': function EqualityValidationRule(newValue, threshold) {
        return 'debe ser ' + _utilities.Utilities.getValue(threshold.otherValue);
      },
      'InEqualityValidationRule': function InEqualityValidationRule(newValue, threshold) {
        return 'no puede ser ' + _utilities.Utilities.getValue(threshold.otherValue);
      },
      'EqualityWithOtherLabelValidationRule': function EqualityWithOtherLabelValidationRule(newValue, threshold) {
        return 'no es igual a ' + _utilities.Utilities.getValue(threshold.otherValueLabel);
      },
      'InEqualityWithOtherLabelValidationRule': function InEqualityWithOtherLabelValidationRule(newValue, threshold) {
        return 'no puede ser igual a ' + _utilities.Utilities.getValue(threshold.otherValueLabel);
      },
      'InCollectionValidationRule': function InCollectionValidationRule(newValue, threshold) {
        return 'no es un valor v\xE1lido';
      },
      'MinimumInclusiveValueValidationRule': function MinimumInclusiveValueValidationRule(newValue, threshold) {
        return 'debe ser ' + _utilities.Utilities.getValue(threshold) + ' o m\xE1s';
      },
      'MinimumLengthValidationRule': function MinimumLengthValidationRule(newValue, threshold) {
        return 'debe ser al menos de ' + _utilities.Utilities.getValue(threshold) + ' caracteres';
      },
      'MinimumValueValidationRule': function MinimumValueValidationRule(newValue, threshold) {
        return 'debe ser ' + _utilities.Utilities.getValue(threshold) + ' o superior';
      },
      'MaximumInclusiveValueValidationRule': function MaximumInclusiveValueValidationRule(newValue, threshold) {
        return 'debe ser ' + _utilities.Utilities.getValue(threshold) + ' o menos';
      },
      'MaximumLengthValidationRule': function MaximumLengthValidationRule(newValue, threshold) {
        return 'no puede medir m\xE1s de ' + _utilities.Utilities.getValue(threshold) + ' caracteres';
      },
      'MaximumValueValidationRule': function MaximumValueValidationRule(newValue, threshold) {
        return 'debe ser menor a ' + _utilities.Utilities.getValue(threshold);
      },
      'NumericValidationRule': function NumericValidationRule(newValue, threshold) {
        return 'debe ser un n\xFAmero';
      },
      'NoSpacesValidationRule': function NoSpacesValidationRule(newValue, threshold) {
        return 'no puede contener espacios';
      },
      'RegexValidationRule': function RegexValidationRule(newValue, threshold) {
        return 'no es un valor v\xE1lido';
      },
      'ContainsOnlyValidationRule': function ContainsOnlyValidationRule(newValue, threshold) {
        return 'no es un valor v\xE1lido';
      },
      'StrongPasswordValidationRule': function StrongPasswordValidationRule(newValue, threshold) {
        return 'debe contener una combinaci\xF3n de letras min\xFAsculas, may\xFAsculas, d\xEDgitos y caracteres especiales';
      },
      'MediumPasswordValidationRule': function MediumPasswordValidationRule(newValue, threshold) {
        return 'debe poseer al menos ' + _utilities.Utilities.getValue(threshold) + ' de las siguientes caracter\xEDsticas: letras min\xFAsculas, letras may\xFAsculas, d\xEDgitos o caracteres especiales';
      },
      'URLValidationRule': function URLValidationRule(newValue, threshold) {
        return 'no es una URL v\xE1lida';
      }
    }
  };
});