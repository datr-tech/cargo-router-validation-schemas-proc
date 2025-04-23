import { processValidationSchemaReadProcess } from '../../../dist';

describe('processValidationSchemaReadProcess', () => {
  describe('positive', () => {
    test('should contain the expected schema', () => {
      const expectedSchema = {
        processId: { in: 'params', isMongoId: true, notEmpty: true },
      };

      const foundSchema = { ...processValidationSchemaReadProcess };
      expect(foundSchema).toStrictEqual(expectedSchema);
    });
  });
});
