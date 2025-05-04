import {
    ARRAY_DELIMITER,
    SLIDER_DELIMITER,
    SPACE_DELIMITER,
    RANGE_DELIMITER,
    SORT_DELIMITER
} from '../delimiter';

describe('delimiter constants', () => {
    it('should have correct ARRAY_DELIMITER value', () => {
        expect(ARRAY_DELIMITER).toBe(',');
    });

    it('should have correct SLIDER_DELIMITER value', () => {
        expect(SLIDER_DELIMITER).toBe('-');
    });

    it('should have correct SPACE_DELIMITER value', () => {
        expect(SPACE_DELIMITER).toBe('_');
    });

    it('should have correct RANGE_DELIMITER value', () => {
        expect(RANGE_DELIMITER).toBe('-');
    });

    it('should have correct SORT_DELIMITER value', () => {
        expect(SORT_DELIMITER).toBe('.');
    });
});