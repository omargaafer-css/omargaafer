# Huffman Compression Tool

A lightweight, efficient, and cross-platform Python tool implementing the **Huffman Coding Algorithm** for lossless data compression and decompression. It features both a modern graphical user interface (Tkinter GUI) and a lightweight command-line interface (CLI).

---

## 🚀 Features

* **Lossless Compression**: Safely compresses any file format (text, images, PDFs, media) using optimal prefix-free codes.
* **Extension Metadata Preservation**: Preserves original file extension metadata inside the compressed file (`.huff`), ensuring seamless restoration of the original format upon decompression.
* **Interactive GUI Dashboard**: Simple-to-use Tkinter dashboard for browsing files, initiating compression, and viewing performance telemetry.
* **Telemetry & Analysis**:
  * **Original vs. Compressed Size**: Visualizes bytes saved.
  * **Compression Ratio**: Computes the exact reduction ratio.
  * **Shannon Entropy**: Measures the statistical complexity (entropy) of the source file to evaluate compression feasibility.

---

## 🛠️ Project Structure

```
Huffman_Compression_Project V3/
├── main.py            # CLI entry point (compress & decompress)
├── huffman_gui.py     # Tkinter Graphical User Interface entry point
├── huffman_app.py     # Commented backup app
├── modules/
│   ├── huffman_encoding.py     # Tree building, frequency map, and encoder
│   ├── huffman_decoding.py     # Bitstream parser and tree-based decoder
│   ├── entropy_calculation.py  # Shannon entropy computation module
│   ├── compression_analysis.py # Ratio and savings metrics calculations
│   └── media_utils.py          # File size and type checkers
└── output/            # Default directory for compressed/restored files
```

---

## ⚙️ Installation & Setup

### Prerequisites
* Python 3.12+

### 1. Clone & Navigate to Project
```bash
git clone https://github.com/omar-gaafer/Huffman_Compressor.git
cd Huffman_Compressor
```

---

## 🖥️ Running the Application

### Option A: Run the GUI Application (Recommended for Desktop)
To run the interactive desktop application:
```bash
python huffman_gui.py
```
* **Browse**: Select any file.
* **Compress**: Compresses the file and creates a `.huff` archive under the `output/` directory.
* **Decompress**: Select any `.huff` archive to restore the original file.

### Option B: Run the Command-Line Interface (CLI)
To run the CLI application:
```bash
python main.py
```
You will be prompted to enter the path of the file you want to compress. The script will compress it, save it, and then automatically perform a test decompression to verify the integrity of the output.

---

## 📊 Telemetry and Algorithm Metrics

### Shannon Entropy
The tool calculates the Shannon Entropy of the input file in bits per character. 
$$\text{Entropy } H(X) = - \sum_{i=1}^{n} P(x_i) \log_2 P(x_i)$$
Where $P(x_i)$ is the probability of character $x_i$ appearing in the stream. This gives the theoretical limit of lossless compression for the file, allowing users to analyze how close the Huffman tree gets to the ideal limit.
