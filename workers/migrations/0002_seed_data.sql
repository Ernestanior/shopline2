-- Seed admin user (password: admin123)
-- Password hash generated with bcrypt rounds=10
INSERT INTO users (email, password_hash, name, is_admin, created_at, updated_at) VALUES
('admin@xyn.tw', '$2a$10$rKZvVxwJYVqZ5YqZ5YqZ5eKZvVxwJYVqZ5YqZ5YqZ5YqZ5YqZ5Yq', 'Admin', 1, unixepoch(), unixepoch());

-- Insert sample products
INSERT INTO products (name, description, price, image, category, badge, stock, featured, created_at) VALUES
('【2色·前扣版】沙漏曲線蕾絲魚骨束腰馬甲背心', '精緻蕾絲設計，魚骨支撐，完美塑造沙漏曲線。前扣設計方便穿脫。', 590, '/images/products/product-1.jpg', '束腰馬甲', '2件9折、3件85折♥︎', 50, 1, unixepoch()),
('Alice ➷ 背扣版·沙漏曲線蕾絲魚骨束腰馬甲背心(白)', '優雅白色蕾絲，背扣設計，展現迷人背部曲線。', 580, '/images/products/product-2.jpg', '束腰馬甲', '2件9折、3件85折♥︎', 45, 1, unixepoch()),
('Emma ➷ 背扣版·沙漏曲線蕾絲魚骨束腰馬甲背心(咖啡)', '溫暖咖啡色調，適合秋冬搭配，魚骨支撐塑形效果極佳。', 580, '/images/products/product-3.jpg', '束腰馬甲', '2件9折、3件85折♥︎', 40, 1, unixepoch()),
('游籽 ➷ 背扣版·沙漏曲線蕾絲魚骨束腰馬甲背心(黑)', '經典黑色，百搭款式，蕾絲細節精緻優雅。', 580, '/images/products/product-4.jpg', '束腰馬甲', '2件9折、3件85折♥︎', 60, 1, unixepoch()),
('茜 ➷【背扣版·沙漏曲線蕾絲魚骨束腰馬甲背心】/【附腰帶·摩登街頭條紋西裝褲裙】', '時尚套裝組合，一次擁有完整造型。', 580, '/images/products/product-5.jpg', '套裝', '2件9折、3件85折♥︎', 30, 0, unixepoch()),
('Bonita ➷【背扣版·沙漏曲線蕾絲魚骨束腰馬甲背心】/【附腰帶·極辣長腿御姊風修身包臀裙褲裙】', '性感御姊風格，展現自信魅力。', 580, '/images/products/product-6.jpg', '套裝', '2件9折、3件85折♥︎', 35, 0, unixepoch()),
('Hailey ➷ 背扣版·沙漏曲線蕾絲魚骨束腰馬甲背心(咖啡)', '優雅咖啡色系，溫柔知性。', 580, '/images/products/product-7.jpg', '束腰馬甲', '2件9折、3件85折♥︎', 42, 0, unixepoch()),
('純 ➷【背扣版·沙漏曲線蕾絲魚骨束腰馬甲背心】/【附雙腰帶·美式學姊風修身包臀裙褲裙】', '學院風格設計，青春活力。', 580, '/images/products/product-8.jpg', '套裝', '2件9折、3件85折♥︎', 28, 0, unixepoch()),
('TZU ➷ 背扣版·沙漏曲線蕾絲魚骨束腰馬甲背心(白)', '純淨白色，清新脫俗。', 580, '/images/products/product-9.jpg', '束腰馬甲', '2件9折、3件85折♥︎', 48, 0, unixepoch()),
('璇 ➷【背扣版·沙漏曲線蕾絲魚骨束腰馬甲背心】/【附帶鑽腰帶·酷辣卯釘低腰彈力包臀短褲】', '個性卯釘設計，展現酷辣風格。', 580, '/images/products/product-10.jpg', '套裝', '2件9折、3件85折♥︎', 32, 0, unixepoch()),
('【3色·背扣版】沙漏曲線蕾絲魚骨束腰馬甲背心', '三色可選，背扣設計，適合不同場合穿搭。', 580, '/images/products/product-11.jpg', '束腰馬甲', '2件9折、3件85折♥︎', 55, 1, unixepoch()),
('丸 ➷ 【街頭酷辣公式俐落拉鍊寬鬆皮外套】/【玫瑰雕花蕾絲網紗連體背心bodysuit】/【美式辣妹側拉鍊開衩低腰褲裙】', '完整三件式套裝，打造街頭時尚。', 590, '/images/products/product-12.jpg', '套裝', '2件9折、3件85折♥︎', 25, 0, unixepoch()),
('Rosa ➷【玫瑰雕花蕾絲網紗連體背心bodysuit】/【附帶鑽腰帶·酷辣卯釘低腰彈力包臀短褲】', '浪漫玫瑰圖案，展現女性魅力。', 590, '/images/products/product-13.jpg', '套裝', '2件9折、3件85折♥︎', 30, 0, unixepoch()),
('CC ➷【玫瑰雕花蕾絲網紗連體背心bodysuit】/【附明線腰帶·摩登街頭彈力工裝短褲】', '工裝風格設計，帥氣有型。', 590, '/images/products/product-14.jpg', '套裝', '2件9折、3件85折♥︎', 28, 0, unixepoch()),
('餘曦 ➷ 玫瑰雕花蕾絲網紗連體背心bodysuit', '精緻玫瑰雕花，浪漫優雅。', 590, '/images/products/product-15.jpg', '連體背心', '2件9折、3件85折♥︎', 38, 1, unixepoch()),
('【1色】玫瑰雕花蕾絲網紗連體背心bodysuit', '浪漫玫瑰雕花，網紗材質透氣舒適，連體設計不易走光。', 590, '/images/products/product-16.jpg', '連體背心', '2件9折、3件85折♥︎', 35, 1, unixepoch()),
('Lucy ➷ 帶胸墊·法式高冷蕾絲拼接排釦背心bratop(灰)', '法式優雅設計，高級質感。', 590, '/images/products/product-17.jpg', '背心', '2件9折、3件85折♥︎', 35, 0, unixepoch()),
('Juliana ➷ 帶胸墊·法式高冷蕾絲拼接排釦背心bratop(黑)', '經典黑色背心，簡約時尚。', 590, '/images/products/product-18.jpg', '背心', '2件9折、3件85折♥︎', 42, 1, unixepoch()),
('寶嵐 ➷ 可拆卸胸墊·頂級蕾絲半月魚骨馬甲背心bratop(白)', '頂級蕾絲材質，奢華質感。', 590, '/images/products/product-19.jpg', '背心', '2件9折、3件85折♥︎', 33, 0, unixepoch()),
('Jennie ➷【可拆卸胸墊·頂級蕾絲半月魚骨馬甲背心bratop】/【附雕刻腰帶·酷辣Y2K骷髏卯釘豐胯低腰短褲】', 'Y2K風格設計，復古潮流。', 590, '/images/products/product-20.jpg', '套裝', '2件9折、3件85折♥︎', 27, 0, unixepoch());
