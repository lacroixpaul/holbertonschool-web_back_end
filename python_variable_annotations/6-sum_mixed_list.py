#!/usr/bin/env python3
"""6-sum_mixed_list.py"""

from typing import List, Union


def sum_mixed_list(mxd_lst: List[Union[int, float]]) -> float:
    """ takes a list of ints and floats and returns their sum as a float."""
    return float(sum(mxd_lst))
