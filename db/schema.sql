use dvcipm;

create table subject(
id int not null primary key);

create table dvprs(
entry_id int not null auto_increment primary key,
id int not null,
dvprs_score int null,
date date not null,
foreign key (id) references subject (id)
);

create table pain_interference(
entry_id int not null auto_increment primary key,
id int not null,
pain_int_score int null,
date date not null,
foreign key (id) references subject (id)
);


