import { threadValidationSchemaDeleteThread } from '../../../dist';

describe('threadValidationSchemaDeleteThread', () => {
  describe('positive', () => {
    test('should contain the expected schema', () => {
      const expectedSchema = {
        threadId: { in: 'params', isMongoId: true, notEmpty: true },
      };

      const foundSchema = { ...threadValidationSchemaDeleteThread };
      expect(foundSchema).toStrictEqual(expectedSchema);
    });
  });
});
