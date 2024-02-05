const Contact = () => {
  return (
    <div>
      <h1 className="font-bold text-3xl p-4 m-4">Contact US</h1>
      <form>
        <input
          type="text"
          className="border border-black m-2 ml-8 p-2"
          placeholder="name"
        />
        <input
          type="text"
          className="border border-black m-2 p-2"
          placeholder="message"
        />
        <button className="border border-black m-2 p-2 bg-gray-100 rounded-lg">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
