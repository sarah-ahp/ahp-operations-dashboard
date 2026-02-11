#!/usr/bin/env python3
import os

dirs = [
    'dashboard/app',
    'dashboard/components',
    'dashboard/components/ui',
    'dashboard/lib',
    'dashboard/public',
    'dashboard/styles',
]

for d in dirs:
    os.makedirs(d, exist_ok=True)
    print(f"Created: {d}")

print("\nSetup complete!")
