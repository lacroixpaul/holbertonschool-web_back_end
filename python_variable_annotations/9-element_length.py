#!/usr/bin/env python3
"""9-element_length.py"""

from typing import Iterable, List, Sequence, Tuple


def element_length(lst: Iterable[Sequence]) -> List[Tuple[Sequence, int]]:
    """take a list arg and return a tuple"""
    return [(i, len(i)) for i in lst]
