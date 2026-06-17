---
date: 2026-06-17
layout: single
title: "How to build a package in Python"
---

What is it about those __init__.py files?
<!-- more -->

# Why Does Python Have `__init__.py`?

For a long time, I was confused about what `__init__.py` files are actually about. Sure, I learned that it signifies 
that a directory is a Python package. But I was never really sure what `__init__.py` actually does 
and whether it is still necessary in modern Python.

## The Original Purpose

Historically, a directory needed an `__init__.py` file to be recognized as a Python package.

For example:

```text
my_package/
├── __init__.py
└── module.py
```

Without the file, Python would not allow imports such as:

```python
from my_package import module
```

The presence of `__init__.py` told Python that the directory should be treated as a package.

## Why Does Code Still Work Without It?

Modern Python introduced namespace packages, which means many directories can be imported even without an `__init__.py` file.

This explains why removing the file from some projects appears to have no effect.

However, that does not mean the file has become useless.

## Benefits of Keeping `__init__.py`

### Clear Intent

When I see:

```text
src/eurostat_pipeline/
├── __init__.py
```

I immediately know that this directory is intended to be imported as a Python package.

### Cleaner Imports

Suppose a package contains:

```python
# __init__.py

from .ingestion import ingest_data
```

Users can now write:

```python
from eurostat_pipeline import ingest_data
```

instead of importing from deeper modules.

### Package-Level Configuration

Some projects store version information or package-wide settings inside `__init__.py`.

```python
__version__ = "0.1.0"

from pathlib import Path

PACKAGE_ROOT = Path(__file__).parent
```


## Key Takeaway

The most important thing I learned is that `__init__.py` is no longer strictly required in many situations, but it remains a useful way to signal intent and organize code.

Even when Python can work without it, keeping the file often makes a project easier for other developers to understand.
