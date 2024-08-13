"""
Node is basis of many data structure like linked list, trees, queues
Node contain a value and a link to another node sometimes referred as pointer
if Node has no link or point to null so we've reached the end of path
"""

class Nodes :
    def __init__(self, value=None, link_node=None):
        self.value = value
        self.link_node = link_node
    
    def get_value(self):
        return self.value
    
    def get_link_node(self):
        return self.link_node
    
    def set_link_node(self, link_node):
        self.link_node = link_node
        

    