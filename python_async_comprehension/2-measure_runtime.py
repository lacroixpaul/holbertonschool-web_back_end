#!/usr/bin/env python3
""" measure_runtime """
import asyncio
import time
from typing import List

async_comprehension = __import__('1-async_comprehension').async_comprehension


async def measure_runtime() -> List[float]:
    """coroutine that will execute async_comprehension
    four times in parallel using asyncio.gather."""
    start_time = time.perf_counter()
    await asyncio.gather(async_comprehension(),
                         async_comprehension(),
                         async_comprehension(),
                         async_comprehension())
    return time.perf_counter() - start_time
