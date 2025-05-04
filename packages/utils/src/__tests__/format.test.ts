import {
    formatAmount,
    formatLatency,
    formatMilliseconds,
    formatDate,
    formatCompactNumber,
    valueFormatter
} from '../format';

describe('format utils', () => {
    describe('formatAmount', () => {
        it('should format amount with default locale', () => {
            expect(formatAmount({ currency: 'USD', amount: 1234.56 }))
                .toBe('$1,234.56');
        });

        it('should format amount with custom locale', () => {
            expect(formatAmount({
                currency: 'EUR',
                amount: 1234.56,
                locale: 'de-DE'
            })).toBe('1.234,56 €');
        });

        it('should return undefined when currency is empty', () => {
            expect(formatAmount({ currency: '', amount: 1234.56 }))
                .toBeUndefined();
        });
    });

    describe('formatLatency', () => {
        it('should format milliseconds under 1000', () => {
            expect(formatLatency(123.456)).toBe('123.456ms');
        });

        it('should format seconds for values over 1000ms', () => {
            expect(formatLatency(1234.567)).toBe('1.2s');
        });
    });

    describe('formatMilliseconds', () => {
        it('should format milliseconds with up to 3 decimal places', () => {
            expect(formatMilliseconds(123.4567)).toBe('123.457');
        });
    });

    describe('formatDate', () => {
        it('should format date string', () => {
            const date = new Date('2024-03-15T12:30:00');
            expect(formatDate(date)).toMatch(/Mar 15, 2024 12:30/);
        });
    });

    describe('formatCompactNumber', () => {
        it('should keep numbers under 100 as is', () => {
            expect(formatCompactNumber(99)).toBe('99');
        });

        it('should keep numbers between 100 and 999 as is', () => {
            expect(formatCompactNumber(999)).toBe('999');
        });

        it('should format thousands with k', () => {
            expect(formatCompactNumber(1234)).toBe('1.2k');
        });

        it('should format millions with M', () => {
            expect(formatCompactNumber(1234567)).toBe('1.2M');
        });
    });

    describe('valueFormatter', () => {
        it('should format value in IDR currency', () => {
            expect(valueFormatter(1234567)).toBe('Rp 1.234.567');
        });
    });
});