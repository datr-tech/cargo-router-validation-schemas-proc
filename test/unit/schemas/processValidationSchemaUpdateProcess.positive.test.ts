import { processValidationSchemaUpdateProcess } from '@app-crvsp2/schemas';

describe('processValidationSchemaUpdateProcess', () => {
  describe('positive', () => {
    test('should contain the expected schema', () => {
      const expectedSchema = {
        adminStatusId: {
          default: 'undefined',
          in: 'body',
          isMongoId: true,
          notEmpty: false,
          optional: { values: 'undefined' },
        },
        adminUserId: {
          in: 'body',
          isMongoId: true,
          notEmpty: false,
          default: 'undefined',
          optional: { values: 'undefined' },
        },
        frameworkId: {
          in: 'body',
          isMongoId: true,
          notEmpty: false,
          default: 'undefined',
          optional: { values: 'undefined' },
        },
        journeyId: {
          in: 'body',
          isMongoId: true,
          notEmpty: false,
          default: 'undefined',
          optional: { values: 'undefined' },
        },
        processId: { in: 'params', isMongoId: true, notEmpty: true },
      };

      const foundSchema = { ...processValidationSchemaUpdateProcess };
      expect(foundSchema).toStrictEqual(expectedSchema);
    });
  });
});
