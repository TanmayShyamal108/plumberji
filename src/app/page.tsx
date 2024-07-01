import Image from "next/image";
// import Element from "@/app/components/ecommerce/page-examples/storefront-pages/with_dark_nav_and_footer";
import Link from "next/link";



export default function Home() {
  const cartCount = 0;

  return (
    <body className="container-fluid m-3 " >
     


      <div className="flex justify-center align-middle" style={{ height: "100vh" }}>
        <main className="mt-40 " >

          <div className="ms-20 p-4">
            <Image
              src="/erazeplumber.png"
              alt="Plumber image "
              width={400}
              height={400}
            >

            </Image>
            <p className="font-bold bg-amber-300 p-2 rounded bg-contain w-80 text-center mt-1 ms-10">Fix Any Plumbing Issues Fast</p>
          </div>


          <div className="mt-5">
            <p className="font-semibold ms-7">Hassle-free,Residential & Commercial Plumbing Services at Your Doorstep</p>
          </div>
          <div className="mt-5">
            <p className="font-extrabold text-6xl text-center">Book Your Service Now</p>
          </div>

          <section className="mt-12 mb-12 flex ">
            <div>
              <label htmlFor="city">Select :</label>
              <select name="city" id="">
                <option value="-1">City</option>
                <option value="Hyd">Hyd</option>
                <option value="Mum">Mum</option>
                <option value="Bang">Bang</option>
              </select>
            </div>
            <div>
              <select name="" id="">
                <option value="-1">Select Service City To List The Products</option>

              </select>
            </div>
            <div>
              <button type="button" className="text-white bg-red-700  from-red-700 via-red-600 to-red-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Price</button>
              <button type="button" className="text-green-700 border border-green-700 outline-green-700 hover:bg-green-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2  ">View Details</button>
            </div>

          </section>

          <div>
            <p className="text-center">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero, soluta.</p>
          </div>
          <div className="mt-5 text-center">
            <Link href={'#'} className="text-green-700"><u>Click Here For More Services</u></Link>
          </div>


        </main>
      </div>
      




    </body>
  );
}
