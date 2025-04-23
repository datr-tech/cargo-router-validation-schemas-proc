import { threadValidationSchemaCreateThread } from '@app-crvsp2/schemas';

describe('threadValidationSchemaCreateThread', () => {
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
        hopId: { in: 'body', isMongoId: true, notEmpty: false },
        processId: { in: 'body', isMongoId: true, notEmpty: false },
      };

      const foundSchema = { ...threadValidationSchemaCreateThread };
      expect(foundSchema).toStrictEqual(expectedSchema);
    });
  });
});
