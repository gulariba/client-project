export default function SizeGuidePage() {
  return (
    <main className="bg-black text-white py-20 px-6 min-h-screen">
      <h1 className="text-4xl font-bold text-center mb-10 text-red-500">
        Size Guide
      </h1>

      <p className="text-center text-base text-gray-300 mb-10">
        Find your perfect fit using the international and local size chart below. Measurements are in inches.
      </p>

      <div className="overflow-x-auto border border-gray-700 rounded-lg shadow-lg">
        <table className="w-full table-auto text-sm text-left text-white">
          <thead className="bg-red-900 text-pink-200 uppercase text-xs">
            <tr>
              <th className="px-4 py-3">Int&apos;l Size</th>
              <th className="px-4 py-3">UK</th>
              <th className="px-4 py-3">US</th>
              <th className="px-4 py-3">EU</th>
              <th className="px-4 py-3">PK</th>
              <th className="px-4 py-3">Bust</th>
              <th className="px-4 py-3">Waist</th>
              <th className="px-4 py-3">Hips</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-700 bg-[#121212]">
            <tr>
              <td className="px-4 py-3 font-medium">XS</td>
              <td className="px-4 py-3">6</td>
              <td className="px-4 py-3">2</td>
              <td className="px-4 py-3">34</td>
              <td className="px-4 py-3">4</td>
              <td className="px-4 py-3">30–32&quot;</td>
              <td className="px-4 py-3">24–26&quot;</td>
              <td className="px-4 py-3">32–34&quot;</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-medium">S</td>
              <td className="px-4 py-3">8</td>
              <td className="px-4 py-3">4</td>
              <td className="px-4 py-3">36</td>
              <td className="px-4 py-3">6</td>
              <td className="px-4 py-3">32–34&quot;</td>
              <td className="px-4 py-3">26–28&quot;</td>
              <td className="px-4 py-3">34–36&quot;</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-medium">M</td>
              <td className="px-4 py-3">10</td>
              <td className="px-4 py-3">6</td>
              <td className="px-4 py-3">38</td>
              <td className="px-4 py-3">8</td>
              <td className="px-4 py-3">34–36&quot;</td>
              <td className="px-4 py-3">28–30&quot;</td>
              <td className="px-4 py-3">36–38&quot;</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-medium">L</td>
              <td className="px-4 py-3">12</td>
              <td className="px-4 py-3">8</td>
              <td className="px-4 py-3">40</td>
              <td className="px-4 py-3">10</td>
              <td className="px-4 py-3">36–38&quot;</td>
              <td className="px-4 py-3">30–32&quot;</td>
              <td className="px-4 py-3">38–40&quot;</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-medium">XL</td>
              <td className="px-4 py-3">14</td>
              <td className="px-4 py-3">10</td>
              <td className="px-4 py-3">42</td>
              <td className="px-4 py-3">12</td>
              <td className="px-4 py-3">38–40&quot;</td>
              <td className="px-4 py-3">32–34&quot;</td>
              <td className="px-4 py-3">40–42&quot;</td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  );
}
