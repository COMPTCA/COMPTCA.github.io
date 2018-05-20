from decimal import *

item = Decimal(0.70)
rate = Decimal(1.05)

tax = item * rate
total = item + tax

print('Item:\t', '%.2f' % item)
print('Tax:\t', '%.2f' % tax)
print('Total:\t', '%.2f' % total)

print('\nItem:\t', '%.20f' % item)
print('Tax:\t', '%.20f' % tax)
print('Total:\t', '%.20f' % total)

