#!/usr/bin/env python3
"""8-all"""


import pymongo


def list_all(mongo_collection):
    """ lists all documents in a collection """
    all_documents = mongo_collection.find()
    return all_documents
