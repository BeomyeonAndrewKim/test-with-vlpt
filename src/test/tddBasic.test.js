const stats = {
  max(numbers) {
    return Math.max(...numbers);
  },
  min(numbers) {
    return Math.min(...numbers);
  },
  avg(numbers) {
    return numbers.reduce(
      (acc, current, index, { length }) => acc + current / length,
      0
    );
  },
  sort(numbers) {
    return numbers.sort((a, b) => a - b);
  },

  median(numbers) {
    const { length } = numbers;
    const middle = Math.floor(length / 2);
    return length % 2
      ? numbers[middle]
      : (numbers[middle - 1] + numbers[middle]) / 2;
  },

  mode(numbers) {
    const counts = new Map();
    numbers.forEach(n => {
      const count = counts.get(n) || 0;
      counts.set(n, count + 1);
    });
    const maxCount = Math.max(...counts.values());
    const modes = [...counts.keys()].filter(number => {
      return counts.get(number) === maxCount;
    });

    if (modes.length === numbers.length) {
      return null;
    }

    if (modes.length <= 1) {
      return modes[0];
    }
    return modes;
  }
};

describe("stats", () => {
  it("gets maximum value", () => {
    expect(stats.max([1, 2, 3, 4])).toBe(4);
  });

  it("gets minumum value", () => {
    expect(stats.min([1, 2, 3, 4])).toBe(1);
  });

  it("gets average value", () => {
    expect(stats.avg([1, 2, 3, 4, 5])).toBe(3);
  });

  describe("median", () => {
    it("sorts the array", () => {
      expect(stats.sort([5, 4, 1, 2, 3])).toEqual([1, 2, 3, 4, 5]);
    });

    it("gets the median for odd length", () => {
      expect(stats.median([1, 2, 3, 4, 5])).toBe(3);
    });

    it("gets the median for even length", () => {
      expect(stats.median([1, 2, 3, 4, 5, 6])).toBe(3.5);
    });
  });

  describe("mode", () => {
    it("has one mode", () => {
      expect(stats.mode([1, 2, 2, 2, 3])).toBe(2);
    });

    it("has no mode", () => {
      expect(stats.mode([1, 2, 3])).toBe(null);
    });

    it("has multiple mode", () => {
      expect(stats.mode([1, 2, 2, 3, 3, 4])).toEqual([2, 3]);
    });
  });
});
