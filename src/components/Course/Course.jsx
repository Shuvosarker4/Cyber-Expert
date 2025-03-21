const Course = () => {
  return (
    <div className="mt-10 m-2 w-96">
      <h1 className="text-xl font-semibold text-center mb-2  ">Expert Added</h1>
      <hr />
      <div>
        <div className="card rounded-lg bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title text-xl font-bold text-center my-2">
              Total Cost :
            </h2>

            <hr className="mt-2" />
            <div className="card-actions text-center justify-end p-2">
              <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
                Confirm List
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course;
