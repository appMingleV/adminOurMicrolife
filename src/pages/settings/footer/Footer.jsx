const Footer = () => {
  return (
    <>
      <div className="border m-2 p-2">
        <h2 className="text-2xl font-semibold">Footer</h2>
        <div className="m-2 p-2">
          <div className="border text-xl">Social Media</div>
          <form className="m-2 p-2 flex flex-col h-52 justify-between border">
            <p className="flex gap-4">
              <label className="font-semibold">Facebook </label>
              <input
                type="text"
                placeholder="Facebook Link"
                className="outline-none border border-gray-500 rounded-md px-2 py-1"
              />
            </p>
            <p className="flex gap-4">
              <label className="font-semibold">Youtube</label>
              <input
                type="text"
                placeholder="Youtube Link"
                className="outline-none border border-gray-500 rounded-md px-2 py-1"
              />
            </p>
            <p className="flex gap-4">
              <label className="font-semibold">Instagram</label>
              <input
                type="text"
                placeholder="Instagram Link"
                className="outline-none border border-gray-500 rounded-md px-2 py-1"
              />
            </p>
            <p className="flex gap-4">
              <label className="font-semibold">Twitter</label>
              <input
                type="text"
                placeholder="Twitter Link"
                className="outline-none border border-gray-500 rounded-md px-2 py-1"
              />
            </p>
            <button className="bg-green-600 w-36 text-white py-1 rounded-md active:bg-green-500 border border-black border-2">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Footer;
