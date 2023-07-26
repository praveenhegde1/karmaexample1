describe('calculateSum', function() {
    const threshold = 1.5;
    const inputs = [1, 0, 1, 0, 1];
    const weights = [0.7, 0.6, 0.5, 0.3, 0.4];
  
    it('should calculate the correct sum', function() {
      let expectedSum = 0;
      for (let i = 0; i < inputs.length; i++) {
        expectedSum += inputs[i] * weights[i];
      }
  
      
      let sum = 0;
      for (let i = 0; i < inputs.length; i++) {
        sum += inputs[i] * weights[i];
      }
  
      
      expect(sum).toBe(expectedSum);
    });
  
    it('should be greater than the threshold', function() {
     
      const expectedSum = 3.1; // Assuming a specific expected sum
  
     
      let sum = 0;
      for (let i = 0; i < inputs.length; i++) {
        sum += inputs[i] * weights[i];
      }
  
      expect(sum).toBeGreaterThan(expectedSum);
    });
  });
  