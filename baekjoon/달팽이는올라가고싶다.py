import math
a, b, c = map(int, input().split())

result2 = (c - a) / (a - b) + 1
print(math.ceil(result2))
