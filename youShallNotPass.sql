-- 创建 student 表
drop table t_student;
create table t_student(
       id integer primary key autoincrement,
       name text,
       matriculation integer,
       class integer,
       address_province text,
       sex text
);

-- 创建 course 表
drop table t_course;
create table t_course(
       id integer primary key autoincrement,
       name text,
       teacher text
);

-- 创建 student 表
drop table t_mark;
create table t_mark(
       id integer primary key autoincrement,
       sid integer,
       cid integer,
       mark float
);

-- 插入 student 数据
insert into t_student(name, matriculation, class, address_province, sex)
       values('张小花', 2014, 3, '福建省', '女');
insert into t_student(name, matriculation, class, address_province, sex)
       values('刘小黄', 2013, 2, '福建省', '女');
insert into t_student(name, matriculation, class, address_province, sex)
       values('王小波', 2017, 1, '福建省', '男');
insert into t_student(name, matriculation, class, address_province, sex)
       values('王大波', 2011, 5, '福建省', '男');
insert into t_student(name, matriculation, class, address_province, sex)
       values('陈真', 2011, 5, '福建省', '男');
insert into t_student(name, matriculation, class, address_province, sex)
       values('叶问', 2014, 3, '山东省', '男');
insert into t_student(name, matriculation, class, address_province, sex)
       values('李小龙', 2000, 2, '山西省', '男');
insert into t_student(name, matriculation, class, address_province, sex)
       values('元首', 2007, 1, '河北省', '男');
insert into t_student(name, matriculation, class, address_province, sex)
       values('方首', 2009, 3, '河南省', '男');
insert into t_student(name, matriculation, class, address_province, sex)
       values('刘欣慈', 2006, 3, '福建省', '男');
insert into t_student(name, matriculation, class, address_province, sex)
       values('马云', 2011, 5, '福建省', '男');
insert into t_student(name, matriculation, class, address_province, sex)
       values('马化腾', 2011, 4, '福建省', '男');
insert into t_student(name, matriculation, class, address_province, sex)
       values('刘邦', 2002, 3, '福建省', '男');
insert into t_student(name, matriculation, class, address_province, sex)
       values('项羽', 2012, 2, '广东省', '男');
insert into t_student(name, matriculation, class, address_province, sex)
       values('胡亥', 2016, 1, '福建省', '男');
insert into t_student(name, matriculation, class, address_province, sex)
       values('荆轲', 2003, 3, '山西', '男');
insert into t_student(name, matriculation, class, address_province, sex)
       values('小明', 2000, 3, '广西壮族自治区', '女');
insert into t_student(name, matriculation, class, address_province, sex)
       values('小红', 2013, 1, '新疆维吾尔族自治区省', '女');
insert into t_student(name, matriculation, class, address_province, sex)
       values('冰心', 2005, 2, '福建省', '女');
insert into t_student(name, matriculation, class, address_province, sex)
       values('火心', 2005, 3, '山东省', '女');
insert into t_student(name, matriculation, class, address_province, sex)
       values('陈雪', 2000, 4, '山西省', '女');
insert into t_student(name, matriculation, class, address_province, sex)
       values('胡宇', 2013, 3, '河北省', '女');
insert into t_student(name, matriculation, class, address_province, sex)
       values('林平之', 2012, 1, '广西省', '女');
insert into t_student(name, matriculation, class, address_province, sex)
       values('赵高', 2010, 3, '浙江省', '女');

-- 插入 course 数据
insert into t_course(name, teacher)
       values('历史', '李斯');
insert into t_course(name, teacher)
       values('数学', '高斯');
insert into t_course(name, teacher)
       values('政治', '高尔基');
insert into t_course(name, teacher)
       values('物理', '牛顿');
insert into t_course(name, teacher)
       values('化学', '诺贝尔');
       
-- 插入 mark 数据
insert into t_mark(sid, cid, mark)
        values(1,1,93);
insert into t_mark(sid, cid, mark)
        values(1,2,45);
insert into t_mark(sid, cid, mark)
        values(1,3,10);
insert into t_mark(sid, cid, mark)
        values(1,4,37);
insert into t_mark(sid, cid, mark)
        values(1,5,13);
insert into t_mark(sid, cid, mark)
        values(2,1,66);
insert into t_mark(sid, cid, mark)
        values(2,2,50);
insert into t_mark(sid, cid, mark)
        values(2,3,89);
insert into t_mark(sid, cid, mark)
        values(2,4,23);
insert into t_mark(sid, cid, mark)
        values(2,5,64);
insert into t_mark(sid, cid, mark)
        values(3,1,78);
insert into t_mark(sid, cid, mark)
        values(3,2,3);
insert into t_mark(sid, cid, mark)
        values(3,3,68);
insert into t_mark(sid, cid, mark)
        values(3,4,14);
insert into t_mark(sid, cid, mark)
        values(3,5,69);
insert into t_mark(sid, cid, mark)
        values(4,1,40);
insert into t_mark(sid, cid, mark)
        values(4,2,55);
insert into t_mark(sid, cid, mark)
        values(4,3,57);
insert into t_mark(sid, cid, mark)
        values(4,4,87);
insert into t_mark(sid, cid, mark)
        values(4,5,38);
insert into t_mark(sid, cid, mark)
        values(5,1,23);
insert into t_mark(sid, cid, mark)
        values(5,2,86);
insert into t_mark(sid, cid, mark)
        values(5,3,15);
insert into t_mark(sid, cid, mark)
        values(5,4,56);
insert into t_mark(sid, cid, mark)
        values(5,5,8);
insert into t_mark(sid, cid, mark)
        values(6,1,21);
insert into t_mark(sid, cid, mark)
        values(6,2,45);
insert into t_mark(sid, cid, mark)
        values(6,3,75);
insert into t_mark(sid, cid, mark)
        values(6,4,24);
insert into t_mark(sid, cid, mark)
        values(6,5,54);
insert into t_mark(sid, cid, mark)
        values(7,1,44);
insert into t_mark(sid, cid, mark)
        values(7,2,12);
insert into t_mark(sid, cid, mark)
        values(7,3,53);
insert into t_mark(sid, cid, mark)
        values(7,4,14);
insert into t_mark(sid, cid, mark)
        values(7,5,85);
insert into t_mark(sid, cid, mark)
        values(8,1,74);
insert into t_mark(sid, cid, mark)
        values(8,2,84);
insert into t_mark(sid, cid, mark)
        values(8,3,11);
insert into t_mark(sid, cid, mark)
        values(8,4,12);
insert into t_mark(sid, cid, mark)
        values(8,5,25);
insert into t_mark(sid, cid, mark)
        values(9,1,57);
insert into t_mark(sid, cid, mark)
        values(9,2,31);
insert into t_mark(sid, cid, mark)
        values(9,3,37);
insert into t_mark(sid, cid, mark)
        values(9,4,83);
insert into t_mark(sid, cid, mark)
        values(9,5,13);
insert into t_mark(sid, cid, mark)
        values(10,1,7);
insert into t_mark(sid, cid, mark)
        values(10,2,75);
insert into t_mark(sid, cid, mark)
        values(10,3,66);
insert into t_mark(sid, cid, mark)
        values(10,4,78);
insert into t_mark(sid, cid, mark)
        values(10,5,79);
insert into t_mark(sid, cid, mark)
        values(11,1,51);
insert into t_mark(sid, cid, mark)
        values(11,2,34);
insert into t_mark(sid, cid, mark)
        values(11,3,40);
insert into t_mark(sid, cid, mark)
        values(11,4,68);
insert into t_mark(sid, cid, mark)
        values(11,5,60);
insert into t_mark(sid, cid, mark)
        values(12,1,37);
insert into t_mark(sid, cid, mark)
        values(12,2,75);
insert into t_mark(sid, cid, mark)
        values(12,3,73);
insert into t_mark(sid, cid, mark)
        values(12,4,14);
insert into t_mark(sid, cid, mark)
        values(12,5,38);
insert into t_mark(sid, cid, mark)
        values(13,1,50);
insert into t_mark(sid, cid, mark)
        values(13,2,96);
insert into t_mark(sid, cid, mark)
        values(13,3,99);
insert into t_mark(sid, cid, mark)
        values(13,4,77);
insert into t_mark(sid, cid, mark)
        values(13,5,52);
insert into t_mark(sid, cid, mark)
        values(14,1,45);
insert into t_mark(sid, cid, mark)
        values(14,2,17);
insert into t_mark(sid, cid, mark)
        values(14,3,15);
insert into t_mark(sid, cid, mark)
        values(14,4,61);
insert into t_mark(sid, cid, mark)
        values(14,5,80);
insert into t_mark(sid, cid, mark)
        values(15,1,36);
insert into t_mark(sid, cid, mark)
        values(15,2,95);
insert into t_mark(sid, cid, mark)
        values(15,3,62);
insert into t_mark(sid, cid, mark)
        values(15,4,89);
insert into t_mark(sid, cid, mark)
        values(15,5,17);
insert into t_mark(sid, cid, mark)
        values(16,1,34);
insert into t_mark(sid, cid, mark)
        values(16,2,9);
insert into t_mark(sid, cid, mark)
        values(16,3,17);
insert into t_mark(sid, cid, mark)
        values(16,4,10);
insert into t_mark(sid, cid, mark)
        values(16,5,1);
insert into t_mark(sid, cid, mark)
        values(17,1,94);
insert into t_mark(sid, cid, mark)
        values(17,2,95);
insert into t_mark(sid, cid, mark)
        values(17,3,14);
insert into t_mark(sid, cid, mark)
        values(17,4,7);
insert into t_mark(sid, cid, mark)
        values(17,5,72);
insert into t_mark(sid, cid, mark)
        values(18,1,46);
insert into t_mark(sid, cid, mark)
        values(18,2,65);
insert into t_mark(sid, cid, mark)
        values(18,3,61);
insert into t_mark(sid, cid, mark)
        values(18,4,74);
insert into t_mark(sid, cid, mark)
        values(18,5,57);
insert into t_mark(sid, cid, mark)
        values(19,1,91);
insert into t_mark(sid, cid, mark)
        values(19,2,61);
insert into t_mark(sid, cid, mark)
        values(19,3,41);
insert into t_mark(sid, cid, mark)
        values(19,4,1);
insert into t_mark(sid, cid, mark)
        values(19,5,75);
insert into t_mark(sid, cid, mark)
        values(20,1,41);
insert into t_mark(sid, cid, mark)
        values(20,2,6);
insert into t_mark(sid, cid, mark)
        values(20,3,100);
insert into t_mark(sid, cid, mark)
        values(20,4,29);
insert into t_mark(sid, cid, mark)
        values(20,5,57);
insert into t_mark(sid, cid, mark)
        values(21,1,33);
insert into t_mark(sid, cid, mark)
        values(21,2,48);
insert into t_mark(sid, cid, mark)
        values(21,3,55);
insert into t_mark(sid, cid, mark)
        values(21,4,58);
insert into t_mark(sid, cid, mark)
        values(21,5,91);
insert into t_mark(sid, cid, mark)
        values(22,1,96);
insert into t_mark(sid, cid, mark)
        values(22,2,48);
insert into t_mark(sid, cid, mark)
        values(22,3,52);
insert into t_mark(sid, cid, mark)
        values(22,4,100);
insert into t_mark(sid, cid, mark)
        values(22,5,83);
insert into t_mark(sid, cid, mark)
        values(23,1,63);
insert into t_mark(sid, cid, mark)
        values(23,2,79);
insert into t_mark(sid, cid, mark)
        values(23,3,10);
insert into t_mark(sid, cid, mark)
        values(23,4,84);
insert into t_mark(sid, cid, mark)
        values(23,5,59);
insert into t_mark(sid, cid, mark)
        values(24,1,4);
insert into t_mark(sid, cid, mark)
        values(24,2,80);
insert into t_mark(sid, cid, mark)
        values(24,3,17);
insert into t_mark(sid, cid, mark)
        values(24,4,28);
insert into t_mark(sid, cid, mark)
        values(24,5,23);
       

-- 查询
select * from t_student
where name like '张%';

select * from t_student
where address_province = '福建省'
      and sex = '女';
      
select t_student.name, t_course.*, t_mark.mark from t_student, t_mark, t_course
where t_student.id = t_mark.sid
      and t_course.id = t_mark.cid
      and t_student.sex = '女';

select t_student.*, t_mark.mark from t_student, t_mark
where t_student.id = t_mark.sid
      and t_mark.cid = 4
      and t_student.sex = '男';
      
select a.id, a.name, avg(b.mark) as 平均成绩
from t_student a
left join t_mark b on a.id=b.sid
group by b.sid;