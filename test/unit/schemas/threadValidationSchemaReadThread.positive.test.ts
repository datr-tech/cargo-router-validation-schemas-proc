import { threadValidationSchemaReadThread } from '@app-crvsp2/schemas';

describe('threadValidationSchemaReadThread', () => {
  describe('positive', () => {
    test('should contain the expected schema', () => {
      const expectedSchema = {
        threadId: { in: 'params', isMongoId: true, notEmpty: true },
      };

      const foundSchema = { ...threadValidationSchemaReadThread };
      expect(foundSchema).toStrictEqual(expectedSchema);
    });
  });
});
