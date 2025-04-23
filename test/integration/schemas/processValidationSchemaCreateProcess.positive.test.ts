import { processValidationSchemaCreateProcess } from '../../../dist';

describe('processValidationSchemaCreateProcess', () => {
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
        adminUserId: { in: 'body', isMongoId: true, notEmpty: false },
        frameworkId: { in: 'body', isMongoId: true, notEmpty: false },
        journeyId: { in: 'body', isMongoId: true, notEmpty: false },
      };

      const foundSchema = { ...processValidationSchemaCreateProcess };
      expect(foundSchema).toStrictEqual(expectedSchema);
    });
  });
});
