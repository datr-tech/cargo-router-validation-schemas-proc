import { processValidationSchemaDeleteProcess } from '@app-crvsp2/schemas';

describe('processValidationSchemaDeleteProcess', () => {
  describe('positive', () => {
    test('should contain the expected schema', () => {
      const expectedSchema = {
        processId: { in: 'params', isMongoId: true, notEmpty: true },
      };

      const foundSchema = { ...processValidationSchemaDeleteProcess };
      expect(foundSchema).toStrictEqual(expectedSchema);
    });
  });
});
