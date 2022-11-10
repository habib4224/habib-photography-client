import React from 'react';

const Blogs = () => {
    return (
        <div>
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    <h1>What is the difference between SQL and NoSQL?</h1>
                </div>
                <div className="collapse-content">
                    <p>ans: Remember that SQL dialects share many properties though they interface with distinct databases. Flavors of NoSQL vary far more across their attendant systems, so comparison can be more useful between multiple non-relational technologies vs. SQL generally. Perhaps the most recognizable SQL dialect is MySQL, an open source and free RDBMS (though available through proprietary licenses as well). Its use is widespread in web applications, and it is known for compatibility, support, and good performance in the average case. MySQL has also made concessions to NoSQL practitioners with features like a JSON data type, the “Document Store,” and support for sharding (horizontal scaling). On the non-relational side, MongoDB is primarily a document store containing JSON-like structures and a JavaScript interface. It’s known for being user-friendly (less administration overhead), performant for simple queries, and flexible thanks to its NoSQL underpinnings. Great for hierarchical data storage, it also supports familiar relational concepts from indexing, to aggregation, to some measure of ACID compliance. Like MySQL, it is compatible with many platforms and programming environments, despite relative recency.</p>
                </div>
            </div>
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    <h1>What is JWT, and how does it work?</h1>
                </div>
                <div className="collapse-content">
                    <p>Ans: In authentication, when the user successfully logs in using their credentials, a JSON Web Token will be returned. Since tokens are credentials, great care must be taken to prevent security issues. In general, you should not keep tokens longer than required.</p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;