import React from 'react';

export default function ZenLeafPage() {
  return (
    <div className="antialiased overflow-x-hidden selection:bg-primary-container selection:text-on-primary-container bg-surface text-on-surface font-body">
      <main>
        {/* Sensory Hero Section */}
        <section className="relative min-h-[921px] flex items-center justify-center pt-24 px-4 md:px-12 bg-surface">
          <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center gap-12 lg:gap-24">
            <div className="w-full md:w-5/12 z-10 flex flex-col items-start space-y-8 md:-mr-16 mt-12 md:mt-0">
              <div className="bg-surface/80 backdrop-blur-xl p-8 lg:p-12 rounded-xl ambient-shadow ghost-border">
                <h1 className="font-headline text-5xl md:text-6xl lg:text-[4rem] leading-tight tracking-tight text-on-surface mb-6">
                  The Ritual <br /> <span className="italic text-primary">of Breath.</span>
                </h1>
                <p className="font-body text-on-surface-variant text-lg leading-relaxed mb-8 max-w-md">
                  Discover rare, handcrafted teas sourced from ancient gardens. A moment of pause, steeped in tradition and natural tranquility.
                </p>
                <a className="inline-flex items-center justify-center px-8 py-4 rounded-full gradient-primary text-on-primary font-medium tracking-wide hover:opacity-90 transition-opacity" href="#">
                  Explore Collections
                </a>
              </div>
            </div>
            <div className="w-full md:w-7/12 relative">
              <img
                alt="Close-up of golden tea being poured from a rustic ceramic teapot into a textured bowl"
                className="w-full h-[614px] md:h-[768px] object-cover rounded-[2rem] rounded-tl-[4rem] rounded-br-[4rem] ambient-shadow"
                data-alt="Close up photography of golden amber tea poured from rustic handmade ceramic teapot into a small textured bowl on a wooden table, soft natural window light"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAjEqQezOm0Pe0hThHAGTwwo1iA4bZRegWacj2O8wd1151aMilPyqxO3hqTA2dRawBoHPjHI_JtnusKeaLRktB_5n-dY2ueDriiGg2FZ9cPzeSiQJfgUqn1S6FyORuTmxEky-DFKTJTrz2plNShNd7a_PKVe2PZ7-rE6FWy5ymG7B_MYBSjQUkO75sbsC2vM7MwH5zc5qugFx9yLaXucq_7v5sVDNl1-jSzRrUmZ1ZlW2cbW7bG02rrdP9SgwtnccGVdcs7qhHeY4M"
              />
            </div>
          </div>
        </section>

        {/* Curated Collections (Asymmetric Grid) */}
        <section className="py-32 px-4 md:px-12 bg-surface-container-low">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
              <div>
                <h2 className="font-headline text-4xl text-on-surface mb-4">Curated Offerings</h2>
                <p className="font-body text-on-surface-variant text-lg max-w-xl">
                  Each leaf is a testament to the earth and the artisan's hand. Explore our meticulously selected collections.
                </p>
              </div>
              <a className="text-on-primary-fixed-variant font-medium link-hover-underline inline-flex items-center gap-2" href="#">
                View All Teas <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </a>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12">

              {/* Card 1: Large Asymmetric */}
              <div className="md:col-span-7 group cursor-pointer">
                <div className="relative overflow-hidden rounded-[2rem] rounded-tr-none mb-6 h-[400px] lg:h-[500px]">
                  <img
                    alt="Macro shot of vibrant green matcha powder and a traditional bamboo whisk"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    data-alt="Macro photography of vibrant emerald green ceremonial matcha powder scattered near a traditional bamboo chasen whisk on rough textured stone, soft diffused light"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDHdAKq-5uba5Bq-YtCa5i7S2bBthYL92c16jHUDjlam8_QZaB_qBlJAWQghsKITjE9H7ptgjxh5h4TX0p0lcuE_N_M1e0-d48_C2jCI0b9zQjLK7UA8xV_s4w303WJDXPKCcGiWW6dm3jZc6kGsUzXIBOVCfKRrzwXWDhcaxrfyL_ZfUrJyRdQN6ZnmQHFfcVs_AnkD6Fp_TSCXVaM-vKPH-Wu-I9D0ZrC7mjmvTffzFEoM3-1l0h4rJ2orv9HMoReI0VxLQMFgeE"
                  />
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-headline text-2xl text-on-surface mb-2">Ceremonial Greens</h3>
                    <p className="font-body text-on-surface-variant text-sm tracking-wide uppercase">Spring Harvest</p>
                  </div>
                  <span className="material-symbols-outlined text-primary-container group-hover:text-primary transition-colors">east</span>
                </div>
              </div>

              {/* Stacked Cards */}
              <div className="md:col-span-5 flex flex-col gap-8 lg:gap-12">
                {/* Card 2 */}
                <div className="group cursor-pointer">
                  <div className="relative overflow-hidden rounded-[1.5rem] rounded-bl-none mb-6 h-[250px]">
                    <img
                      alt="Dark twisted oolong tea leaves"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      data-alt="High detail macro photography of dark roasted twisted oolong tea leaves on a neutral beige linen background, highlighting organic textures and deep earthy colors"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuAjCtjO4Yl7dN1ZTfayPbho7AnjX4F0OXkqeXajipGy5oFGza4MidSrYnl-RJhNvhCClDlRpPcXnA2o_8Vgbv-bjQUV7Lt49ICUPxWIg1BESRzzR6rYmNM0hX_HqIGPcvdGWbjBTJlfKjkjwxh2pi_Ew43ZxAjyjaAIu9lE2PX0vtjM-j8L4RZCA8_BJapRZowZcKgVrUDVqwhHV3e_t44Ql6UHSsuyoNmxKMgym16GJksUb_MKMHnTJqpWTDObXbxw5eUhnZylPYA"
                    />
                  </div>
                  <div>
                    <h3 className="font-headline text-xl text-on-surface mb-1">Roasted Oolongs</h3>
                    <p className="font-body text-on-surface-variant text-sm tracking-wide uppercase">Wuyi Mountains</p>
                  </div>
                </div>

                {/* Card 3 */}
                <div className="group cursor-pointer">
                  <div className="relative overflow-hidden rounded-[1.5rem] rounded-tl-none mb-6 h-[250px]">
                    <img
                      alt="Aged puerh tea cake resting on weathered wood"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      data-alt="Authentic photography of an aged puerh tea cake resting on weathered rustic wood, soft shadows, wabi-sabi aesthetic, warm natural lighting"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuBIW00WC904X27Fex5ity5ZqyKejROZ2Wr6Pm-tXEtgaXHRXU_neRO4ayu8dFliPGz9XxdT15vgnyEV1J7ZcUGhOoVxPq-OyNkAMkp7jOh-CAqw5DSapuCWqkJw62zljFoIsqrVQ6IiDTe4j1GOoqq-UEAz6jvjyBk17EStgZolh4336a0MA37-G8bIkCmOyTvGOEzPRLhFJDbUqJXkyLg0chF8uqaLOXG1Aao2mpcZAAvZpo9tfTniduyUdBxAbktK8faEa8zYrbg"
                    />
                  </div>
                  <div>
                    <h3 className="font-headline text-xl text-on-surface mb-1">Aged Pu'erh</h3>
                    <p className="font-body text-on-surface-variant text-sm tracking-wide uppercase">Yunnan Province</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The Process (Narrative Section) */}
        <section className="py-32 px-4 md:px-12 bg-surface">
          <div className="max-w-screen-2xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            <div className="w-full lg:w-1/2 flex justify-center">
              <div className="relative w-full max-w-lg">
                {/* Background offset layer */}
                <div className="absolute inset-0 bg-surface-container-high rounded-full rounded-tr-none transform translate-x-8 translate-y-8"></div>
                <img
                  alt="Hands carefully sorting fresh green tea leaves"
                  className="relative z-10 w-full aspect-[4/5] object-cover rounded-full rounded-tr-none shadow-xl"
                  data-alt="Close up photography of weathered farmer hands gently sorting freshly plucked bright green tea leaves in a woven bamboo basket, authentic cinematic documentary style"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAXgSdUbtcIkzom0pTrqGdy22NyhVMZIOpoxaz9lX1AL5hXrwBM4m-l6i53Jfj8pVAm0mXXZkituXsil5gTFkV0UimAK9irS4FhjpgiHUcrPtxVwWkZw9NQU31cpr7PvEGZ1ujgZDDOv3BebCuU57CUb0du6T2mnaM0WOo4Ja8JzQrZ7OUmwxtCQiSRQ6FXg6xggTY5QYzqCLa-cnZrTbMfs2UQNh97qg_diyptEaJp1Ukgj_oLkWgRvFPsPS9YC9-jsJSOX1DSt10"
                />
              </div>
            </div>
            <div className="w-full lg:w-1/2 max-w-xl">
              <span className="font-body text-sm uppercase tracking-widest text-primary mb-6 block">The Origin</span>
              <h2 className="font-headline text-4xl md:text-5xl text-on-surface leading-tight mb-8">
                Honoring the hands that shape the leaf.
              </h2>
              <div className="space-y-6 text-on-surface-variant font-body text-lg leading-relaxed">
                <p>
                  True tea is not manufactured; it is coaxed into being. Our journey begins in remote, high-altitude gardens where generational farmers practice ancient, labor-intensive techniques.
                </p>
                <p>
                  From the gentle plucking of the first spring buds to the masterful roasting over charcoal, we preserve the human touch at every step. This dedication ensures that every cup tells a story of terroir and tradition.
                </p>
              </div>
              <a className="inline-flex items-center gap-4 mt-10 text-on-primary-fixed-variant font-medium group" href="#">
                <span className="link-hover-underline pb-1">Discover Our Process</span>
                <div className="w-10 h-10 rounded-full border border-outline-variant flex items-center justify-center group-hover:bg-surface-container-high transition-colors">
                  <span className="material-symbols-outlined text-sm">east</span>
                </div>
              </a>
            </div>
          </div>
        </section>

        {/* Lifestyle / Wabi-Sabi Ritual */}
        <section className="relative py-40 px-4 md:px-12 flex items-center justify-center bg-surface-container-lowest overflow-hidden">
          {/* Subtle background texture indication */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9IiNlN2U1ZTAiIGZpbGwtb3BhY2l0eT0iMC41Ii8+PC9zdmc+')] opacity-50"></div>

          <div className="relative z-10 text-center max-w-3xl mx-auto">
            <span className="material-symbols-outlined text-4xl text-primary-fixed-dim mb-8">spa</span>
            <h2 className="font-headline text-3xl md:text-5xl text-on-surface leading-snug mb-8">
              "Drink your tea slowly and reverently, as if it is the axis on which the world earth revolves."
            </h2>
            <p className="font-body text-on-surface-variant italic mb-12">— Thich Nhat Hanh</p>
            <a className="inline-block px-10 py-4 bg-surface-container-highest text-on-surface rounded-full font-medium tracking-wide hover:bg-surface-variant transition-colors" href="#">
              Begin Your Ritual
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}