export default function Footer() {
  return (
    <>
      <footer className="footer font-Jost text-white p-20 bg-[#010851] mt-20">
        <form>
          <div className="flex gap-2 items-center">
            <div className="bg-gradient-to-r from-[#EE9AE5] to-[#5961F9] w-8 h-8 rounded-md"></div>
            <a className=" text-xl font-Jost font-semibold">Skill Factory</a>
          </div>
          <p className="text-white text-sm my-4">
            A simple paragraph is comprised of three major components. The first
            sentence,
            <br /> which is often a declarative sentence.
          </p>
          <fieldset className="form-control w-80">
            <label className="label">
              <span className="text-white font-Jost">
                Enter your email address
              </span>
            </label>
            <div className="join text-white">
              <input
                type="text"
                placeholder="Your email"
                className="input input-bordered join-item bg-[#373089]"
              />
              {/* Open the modal using document.getElementById('ID').showModal() method */}
              <button
                className="px-4 bg-[#9A7AF1] join-item rounded-lg font-Jost"
                onClick={(e) => {
                  e.preventDefault(); // Prevent default form submission behavior
                  document.getElementById("my_modal_5").showModal();
                }}
              >
                Subscribe
              </button>
              <dialog
                id="my_modal_5"
                className="modal modal-bottom sm:modal-middle"
              >
                <div className="modal-box">
                  <img
                    src="https://i.ibb.co/b2vK5NQ/undraw-a-whole-year-vnfm-1.png"
                    alt=""
                  />
                  <h1 className="text-4xl font-Jost text-black text-center mt-6">
                    THANK YOU
                  </h1>
                  <div className="modal-action">
                    <form method="dialog">
                      {/* if there is a button in form, it will close the modal */}
                      <button className="px-4 py-2.5 rounded-lg bg-[#9A7AF1] font-Jost text-white">Close</button>
                    </form>
                  </div>
                </div>
              </dialog>
            </div>
          </fieldset>
        </form>
        <nav>
          <header className="footer-title">Services</header>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <header className="footer-title">Company</header>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <header className="footer-title">Legal</header>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
        <hr className="text-white bg-white h-1" />
      </footer>
      <div className="footer font-Jost border-t-2 border-white text-white px-20 py-4 pb-6 bg-[#010851] items-center">
        <aside className="items-center grid-flow-col">
          <p>Copyright © 2024 - All right reserved</p>
        </aside>
        <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
          <a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
            </svg>
          </a>
          <a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
            </svg>
          </a>
          <a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
            </svg>
          </a>
        </nav>
      </div>
    </>
  );
}
