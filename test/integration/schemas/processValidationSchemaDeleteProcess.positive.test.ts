import { processValidationSchemaDeleteProcess } from '../../../dist';

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
