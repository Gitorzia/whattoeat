from graphviz import Digraph

# 创建有向图
dot = Digraph(comment='DAG for Tip Income Analysis')
dot.attr(rankdir='TB')

# 设置节点样式
dot.attr('node', shape='box', style='filled', fillcolor='lightblue')

# 添加控制变量节点
controls = ['Age', 'Work Experience', 'Follower Numbers', 'Physical Attractiveness', 'Event']
for control in controls:
    dot.node(control, control)

# 添加主要变量节点
dot.node('Menstrual Phase', 'Menstrual Phase\n(Menstrual, Fertile, Luteal)')
dot.node('Pill Use', 'Contraceptive Pill Use\n(Yes/No)')
dot.node('Interaction', 'Phase*Pill\nInteraction')
dot.node('Tip Income', 'Average Hourly\nTip Income')

# 添加边（关系）
# 控制变量到因变量的关系
for control in controls:
    dot.edge(control, 'Tip Income')

# 主要变量关系
dot.edge('Menstrual Phase', 'Tip Income')
dot.edge('Pill Use', 'Tip Income')
dot.edge('Menstrual Phase', 'Interaction')
dot.edge('Pill Use', 'Interaction')
dot.edge('Interaction', 'Tip Income')

# 保存图片
dot.render('tip_income_dag', format='png', cleanup=True) 